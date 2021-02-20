import React, { useEffect, useRef } from 'react';
import { StyleSheet, PanResponder, Animated, Dimensions, View, Button, Alert } from 'react-native';

const DEVICE_HEIGHT = Dimensions.get('screen').height;
const DEVICE_WIDTH = Dimensions.get('screen').width;

const StartY = 500;
const EndY = 200;
const AUTO_ANIMATION_TIME = 700;
const SwipeSample = () => {
  const ref = useRef();
  const animationValue = useRef(new Animated.Value(StartY)).current;
  const opacityAnimationValue = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const handleShouldSetPanResponder = (evt: any, gestureState: any) => {
    return evt.nativeEvent.touches.length === 1 && Math.abs(gestureState.dy) > 5;
  };
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(pan, {
      useNativeDriver: false,
      toValue: { x: 0, y: EndY },
      duration: AUTO_ANIMATION_TIME,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(pan, {
      useNativeDriver: false,
      toValue: { x: 0, y: StartY },
      duration: AUTO_ANIMATION_TIME,
    }).start();
  };

  useEffect(() => {
    pan.setOffset({ x: 0, y: StartY });
    pan.setValue({ x: 0, y: 0 });
    pan.y.addListener((value: any) => {
      animationValue.setValue(value.value);
      opacityAnimationValue.setValue(value.value >= StartY ? 0 : 1);
    });

    return () => {
      pan.y.removeAllListeners();
    };
  }, []);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: handleShouldSetPanResponder,
    onMoveShouldSetPanResponder: handleShouldSetPanResponder,
    onPanResponderMove: (e, gestureState) => {
      return Animated.event(
        [
          null,
          {
            dy: pan.y,
          },
        ],
        {
          useNativeDriver: false,
        },
      )(e, gestureState);
    },
    onPanResponderGrant: () => {
      pan.setOffset(pan.__getValue());
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderRelease: (_e, gestureState) => {
      pan.flattenOffset();
      if (gestureState.dy > 0) {
        fadeOut();
      } else {
        fadeIn();
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.backgroundPanel}>
        <Button
          title="press"
          onPress={() => {
            Alert.alert('button press');
          }}
        />
      </View>
      <Animated.View
        style={[
          styles.opacityPanel,
          {
            zIndex: opacityAnimationValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 3],
            }),
            opacity: animationValue.interpolate({
              inputRange: [0, StartY],
              outputRange: [1, 0],
            }),
            height: opacityAnimationValue.interpolate({
              inputRange: [0, 1],
              outputRange: [DEVICE_HEIGHT, DEVICE_HEIGHT],
            }),
          },
        ]}
      />
      <Animated.View
        ref={ref}
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.swipePanel]}
      />
      <Animated.View style={[pan.getLayout(), styles.modalPanel]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'yellow',
    zIndex: 0,
  },
  backgroundPanel: {
    zIndex: 1,
  },
  opacityPanel: {
    height: 500,
    width: DEVICE_WIDTH,
    backgroundColor: 'white',
    zIndex: 0,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  swipePanel: {
    backgroundColor: '#61dafb',
    height: 100,
    width: DEVICE_WIDTH,
    borderRadius: 4,
    zIndex: 5,
  },

  modalPanel: {
    backgroundColor: 'red',
    height: DEVICE_HEIGHT / 2,
    width: DEVICE_WIDTH,
    borderRadius: 4,
    zIndex: 4,
  },
});

export default SwipeSample;

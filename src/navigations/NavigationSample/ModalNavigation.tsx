import React from 'react';
import {
  ModalNavigation1Screen,
  ModalNavigation2Screen,
} from 'screens/NavigationExample/ModalNavigation';

import { StackRoute } from 'constants/Routes';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
import { TransitionSpecs, createStackNavigator } from '@react-navigation/stack';
import { Easing, View, StyleSheet } from 'react-native';

const AnimationConfig: TransitionSpec = {
  ...TransitionSpecs.TransitionIOSSpec,
  animation: 'timing',
  config: {
    duration: 700,
    easing: Easing.inOut(Easing.quad),
  },
};

const modalStack = createStackNavigator();

const ModalStackSampleStack = () => {
  return (
    <modalStack.Navigator
      initialRouteName={StackRoute.ModalNavigation1Screen}
      mode="modal"
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardOverlay: (props) => <View {...props} style={styles.cardOverlay} />,
        gestureDirection: 'vertical',
        transitionSpec: {
          open: AnimationConfig,
          close: AnimationConfig,
        },
        cardStyleInterpolator: ({ current, layouts }) => ({
          cardStyle: {
            transform: [
              {
                translateY: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.height, 0],
                }),
              },
            ],
          },
          overlayStyle: {
            opacity: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.7],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}>
      <modalStack.Screen
        name={StackRoute.ModalNavigation1Screen}
        component={ModalNavigation1Screen}
      />
      <modalStack.Screen
        name={StackRoute.ModalNavigation2Screen}
        component={ModalNavigation2Screen}
        options={{
          headerShown: false,
          transitionSpec: {
            open: AnimationConfig,
            close: AnimationConfig,
          },
        }}
      />
    </modalStack.Navigator>
  );
};

export default ModalStackSampleStack;

const styles = StyleSheet.create({
  cardOverlay: {
    opacity: 0.5,
    backgroundColor: 'black',
    height: '100%',
  },
});

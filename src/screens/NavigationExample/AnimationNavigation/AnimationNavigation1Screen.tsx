/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { observer } from 'mobx-react';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { StackRoute } from 'constants/Routes';

type Props = {
  navigation: any;
};

const AnimationNavigation1Screen = (props: Props) => {
  const { navigation } = props;
  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <Button
            title="Go to Animation Screen 2"
            onPress={() => {
              navigation.navigate(StackRoute.AnimationNavigation2Screen);
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});

export default observer(AnimationNavigation1Screen);

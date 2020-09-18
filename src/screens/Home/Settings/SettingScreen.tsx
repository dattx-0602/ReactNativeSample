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
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const SettingScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.body}>
        <View style={styles.body}>
          <Text>Hi, This is Setting Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default observer(SettingScreen);

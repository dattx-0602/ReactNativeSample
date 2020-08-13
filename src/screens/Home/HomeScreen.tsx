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
import { SafeAreaView, StatusBar, StyleSheet, View, Button } from 'react-native';
import { UserStore } from 'stores';

const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <View style={styles.body}>
          <Button
            title="Logout"
            onPress={() => {
              UserStore.setHasLogin(false);
            }}
          />
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

export default observer(HomeScreen);

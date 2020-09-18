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
import { Button, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { UserStore } from 'stores';
import { StackRoute } from 'constants/Routes';

const RegisterScreen = (props: any) => {
  const { navigation } = props;
  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <Button
            title="Register and Login"
            onPress={() => {
              UserStore.setHasLogin(true);
            }}
          />
          <Button
            title="Go to Register again..."
            onPress={() => {
              props.navigation.push(StackRoute.RegisterScreen);
            }}
          />
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default observer(RegisterScreen);

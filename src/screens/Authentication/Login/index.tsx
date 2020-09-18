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

type Props = {
  navigation: any;
};

const LoginScreen = (props: Props) => {
  const { navigation } = props;
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Button
          title="Login"
          onPress={() => {
            UserStore.setHasLogin(true);
          }}
        />
        <Button
          title="Register"
          onPress={() => {
            navigation.navigate(StackRoute.RegisterScreen);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});

export default observer(LoginScreen);

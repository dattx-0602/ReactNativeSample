/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { UserStore } from 'stores';
import AuthNavigationStack from 'navigations/Authentication';
import HomeNavigationStack from 'navigations/Home';
import { observer } from 'mobx-react';

const App = () => {
  const selectStack = () => {
    if (!UserStore.IsUserLogined) {
      return <AuthNavigationStack />;
    } else {
      return <HomeNavigationStack />;
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.lighter} />
      <NavigationContainer>{selectStack()}</NavigationContainer>
    </>
  );
};

export default observer(App);

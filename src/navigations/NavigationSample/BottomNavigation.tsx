import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomNavigationScreen } from 'screens/NavigationExample/BottomNavigation';
import { StackRoute } from 'constants/Routes';
import { Alert } from 'react-native';

const BottomStack = createBottomTabNavigator();

const BottomNavigationStack = () => {
  return (
    <BottomStack.Navigator initialRouteName={StackRoute.BottomNavigation1ScreenScreen}>
      <BottomStack.Screen
        name={StackRoute.BottomNavigation1ScreenScreen}
        options={{
          title: 'Home',
        }}>
        {(props) => <BottomNavigationScreen {...props} title="This is Home Screen" />}
      </BottomStack.Screen>
      <BottomStack.Screen
        name={StackRoute.BottomNavigation2ScreenScreen}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            Alert.alert('You Need Login before access Account screen!');
          },
        }}
        options={{
          title: 'Account',
        }}>
        {(props) => <BottomNavigationScreen {...props} title="This is Account Screen" />}
      </BottomStack.Screen>
    </BottomStack.Navigator>
  );
};

export default BottomNavigationStack;

import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomNavigationScreen } from 'screens/NavigationExample/BottomNavigation';
import { StackRoute } from 'constants/Routes';

const BottomStack = createBottomTabNavigator();

const BottomNavigationStack = () => {
  return (
    <BottomStack.Navigator initialRouteName={StackRoute.BottomNavigation1ScreenScreen}>
      <BottomStack.Screen
        name={StackRoute.BottomNavigation1ScreenScreen}
        options={{
          title: 'Bottom 1',
        }}>
        {(props) => <BottomNavigationScreen {...props} title="Bottom Navigation 1 Screen" />}
      </BottomStack.Screen>
      <BottomStack.Screen
        name={StackRoute.BottomNavigation2ScreenScreen}
        options={{
          title: 'Bottom 2',
        }}>
        {(props) => <BottomNavigationScreen {...props} title="Bottom Navigation 2 Screen" />}
      </BottomStack.Screen>
    </BottomStack.Navigator>
  );
};

export default BottomNavigationStack;

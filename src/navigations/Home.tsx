import React from 'react';
import { HomeScreen, SettingScreen } from 'screens/Home';

import { StackRoute } from 'constants/Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const HomeNavigationStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={StackRoute.HomePageScreen} component={HomeScreen} />
      <Tab.Screen name={StackRoute.SettingScreen} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigationStack;

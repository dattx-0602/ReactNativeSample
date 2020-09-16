import React from 'react';
import { HomeScreen, SettingScreen } from 'screens/Home';

import { StackRoute } from 'constants/Routes';
import { createStackNavigator } from '@react-navigation/stack';
import AnimationSampleStack from './NavigationSample/AnimationNavigation';
import BottomNavigationStack from './NavigationSample/BottomNavigation';
import ModalNavigationStack from './NavigationSample/ModalNavigation';

const Tab = createStackNavigator();
const HomeNavigationStack = () => {
  return (
    <Tab.Navigator initialRouteName={StackRoute.HomePageScreen}>
      <Tab.Screen name={StackRoute.HomePageScreen} component={HomeScreen} />
      <Tab.Screen
        name={StackRoute.SettingScreen}
        options={{ headerShown: false }}
        component={SettingScreen}
      />
      <Tab.Screen
        name={StackRoute.AnimationNavigation1Screen}
        options={{ headerShown: false }}
        component={AnimationSampleStack}
      />
      <Tab.Screen
        name={StackRoute.BottomNavigation1ScreenScreen}
        component={BottomNavigationStack}
        options={{
          title: 'Bottom Navigation Example',
        }}
      />
      <Tab.Screen
        name={StackRoute.ModalNavigation1Screen}
        component={ModalNavigationStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigationStack;

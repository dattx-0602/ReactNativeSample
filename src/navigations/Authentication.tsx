import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { StackRoute } from 'constants/Routes';
import LoginScreen from 'screens/Authentication/Login';
import RegisterScreen from 'screens/Authentication/Register';


const Stack = createStackNavigator();

const AuthNavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName={StackRoute.Login}>
      <Stack.Screen
        name={StackRoute.LoginScreen}
        component={LoginScreen}
        options={{
          title: 'Login Page',
        }}
      />
      <Stack.Screen
        name={StackRoute.RegisterScreen}
        component={RegisterScreen}
        options={{
          title: 'Register Page',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigationStack;

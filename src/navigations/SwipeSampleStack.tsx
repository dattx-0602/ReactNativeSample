import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { StackRoute } from 'constants/Routes';

import { SwipeSample } from 'screens/SwipeSample';

const Stack = createStackNavigator();

const SwipeSampleStack = () => {
  return (
    <Stack.Navigator initialRouteName={StackRoute.SwipeSampleScreen}>
      <Stack.Screen
        name={StackRoute.SwipeSampleScreen}
        component={SwipeSample}
        options={{
          title: 'Swipe Sample Screen',
        }}
      />
    </Stack.Navigator>
  );
};

export default SwipeSampleStack;

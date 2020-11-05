import React from 'react';
import {
  AnimationNavigation1Screen,
  AnimationNavigation2Screen,
} from 'screens/NavigationExample/AnimationNavigation';

import { StackRoute } from 'constants/Routes';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
import {
  TransitionSpecs,
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { NavigationStore } from 'stores';

const AnimationConfig: TransitionSpec = {
  ...TransitionSpecs.TransitionIOSSpec,
  animation: 'spring',
  config: {
    stiffness: 600,
    damping: 200,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const AnimationStack = createStackNavigator();

const beforeRemove = (e: any) => {
  if (NavigationStore.IsLockNavigation) {
    return e.preventDefault();
  }
};

const AnimationSampleStack = () => {
  return (
    <AnimationStack.Navigator
      initialRouteName={StackRoute.AnimationNavigation1Screen}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureDirection: 'horizontal-inverted',
        transitionSpec: {
          open: AnimationConfig,
          close: AnimationConfig,
        },
      }}>
      <AnimationStack.Screen
        name={StackRoute.AnimationNavigation1Screen}
        component={AnimationNavigation1Screen}
        options={{
          title: 'Animation Navigation Example',
        }}
      />
      <AnimationStack.Screen
        name={StackRoute.AnimationNavigation2Screen}
        component={AnimationNavigation2Screen}
        listeners={{
          beforeRemove: beforeRemove,
        }}
        options={{
          title: 'Animation Navigation Example',
        }}
      />
    </AnimationStack.Navigator>
  );
};

export default AnimationSampleStack;

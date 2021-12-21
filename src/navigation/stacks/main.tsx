/**
 * main.tsx
 * developed by Hasan Alawneh.
 * A file that shows a main stack navigator.
 * created at: 21/12/2021
 */

import React from 'react';
import {SplashScreen} from 'screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AllStackNavParams} from 'navigation/types';
import AuthStack from './auth';
import AppStack from './app';
import {COMMON_NAV_SCREEN_OPTIONS} from 'navigation/constants';

// create main stack navigator.
const MainStack = createStackNavigator<AllStackNavParams>();

/**
 * A function component that shows a main stack navigator.
 */
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={COMMON_NAV_SCREEN_OPTIONS}>
        <MainStack.Screen name={'SplashScreen'} component={SplashScreen} />
        <MainStack.Screen name={'AuthStack'} component={AuthStack} />
        <MainStack.Screen name={'AppStack'} component={AppStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

// export as default.
export default MainStackNavigator;

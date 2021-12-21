/**
 * main.tsx
 * developed by Hasan Alawneh.
 * A file that shows an an app navigator.
 * created at: 21/12/2021
 */

import React from 'react';
import {HomeScreen} from 'screens';
import {createStackNavigator} from '@react-navigation/stack';
import {AllStackNavParams} from 'navigation/types';
import {COMMON_NAV_SCREEN_OPTIONS} from 'navigation/constants';

// create app stack navigator.
const AppStack = createStackNavigator<AllStackNavParams>();

/**
 * A function component that shows an app stack navigator.
 */
function AuthStackNavigator() {
  return (
    <AppStack.Navigator screenOptions={COMMON_NAV_SCREEN_OPTIONS}>
      <AppStack.Screen name={'HomeScreen'} component={HomeScreen} />
    </AppStack.Navigator>
  );
}

// export as default.
export default AuthStackNavigator;

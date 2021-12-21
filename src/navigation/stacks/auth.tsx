/**
 * main.tsx
 * developed by Hasan Alawneh.
 * A file that shows an auth stack navigator.
 * created at: 21/12/2021
 */

import React from 'react';
import { LoginScreen, SignupScreen } from 'screens';
import { createStackNavigator } from '@react-navigation/stack';
import { AllStackNavParams } from 'navigation/types';
import { COMMON_NAV_SCREEN_OPTIONS } from 'navigation/constants';

// create auth stack navigator.
const AuthStack = createStackNavigator<AllStackNavParams>();

/**
 * A function component that shows an auth stack navigator.
 */
function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={COMMON_NAV_SCREEN_OPTIONS}>
      <AuthStack.Screen name={'LoginScreen'} component={LoginScreen} />
      <AuthStack.Screen name={'SignupScreen'} component={SignupScreen} />
    </AuthStack.Navigator>
  );
}

// export as default.
export default AuthStackNavigator;

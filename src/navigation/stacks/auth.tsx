/**
 * main.tsx
 * developed by Hasan Alawneh.
 * A file that shows an auth stack navigator.
 * created at: 21/12/2021
 */

import React from 'react';
import {LoginScreen} from 'screens';
import {createStackNavigator} from '@react-navigation/stack';
import {AllStackNavParams} from 'navigation/types';

// create auth stack navigator.
const AuthStack = createStackNavigator<AllStackNavParams>();

/**
 * A function component that shows an auth stack navigator.
 */
function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName={'SplashScreen'}>
      <AuthStack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}

// export as default.
export default AuthStackNavigator;

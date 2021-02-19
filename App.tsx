import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from './src/screens';
import { CONSTANTS } from './src/navigation';

// create main stack.
const MainStack = createStackNavigator();

/**
 * A main function component that shows an entire app.
 */
const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name={CONSTANTS.SCREEN_NAMES.SPLAH}
          component={SplashScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

// Export as default.
export default App;
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from 'screens';
import { Provider as PaperProvider } from 'react-native-paper';
import { THEME } from 'theme';
import {
  ThemeContextState,
  ThemeContext,
  IThemeContextProvider
} from 'context';
import { AllStackNavParams } from 'navigation/types';

// create the main stack.
const MainStack = createStackNavigator<AllStackNavParams>();

/**
 * A main function component that shows an entire app.
 */
const App = () => {
  return (
    <ThemeContextState>
      <InternalApp />
    </ThemeContextState>
  );
};

const InternalApp = () => {

  // get the selected theme from theme context.
  const { selectedTheme } = useContext<IThemeContextProvider>(ThemeContext as any);

  return (
    <PaperProvider theme={THEME[selectedTheme]}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName={'SplashScreen'}
          screenOptions={{
            headerShown: false
          }}
        >
          <MainStack.Screen
            name={'SplashScreen'}
            component={SplashScreen}
          />

          <MainStack.Screen
            name={'HomeScreen'}
            component={SplashScreen}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

// Export as default.
export default App;
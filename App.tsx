import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from 'screens';
import { CONSTANTS } from 'navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { THEME } from 'theme';
import {
  ThemeContextState,
  ThemeContext,
  IThemeContextProvider
} from 'context';

// create the main stack.
const MainStack = createStackNavigator();

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
        <MainStack.Navigator>
          <MainStack.Screen
            name={CONSTANTS.SCREEN_NAMES.SPLAH}
            component={SplashScreen}
            options={{
              headerShown: false
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

// Export as default.
export default App;
import React, {
  useContext,
  useLayoutEffect,
  useState
} from 'react';
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
import { setI18nConfig } from 'i18n';
import { Loader } from 'components';

// create the main stack.
const MainStack = createStackNavigator();

/**
 * A main function component that shows an entire app.
 */
const App = () => {

  // state.
  const [isSetupCompleted, setIsSetupCompleted] = useState<boolean>(false);

  // setup language.
  useLayoutEffect(
    () => {

      // setup language and others data.
      async function asyncSetup() {

        // setup language.
        await setI18nConfig();

        // set "setIsSetupCompleted" to true.
        setIsSetupCompleted(true);

      };

      // execute async function.
      asyncSetup();

    },
    []
  );

  // if setup is not completed do no thing.
  if (isSetupCompleted === false) return <Loader />;

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
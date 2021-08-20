import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SplashScreen} from 'screens';
import {Provider as PaperProvider} from 'react-native-paper';
import {THEME} from 'theme';
import {ThemeContextState, ThemeContext, IThemeContextProvider} from 'context';
import {AllStackNavParams} from 'navigation/types';
import {NotificationHelper} from 'helperes';
import {QUOTES} from 'config';
import {setI18nConfig} from 'i18n';

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
  // state.
  const [isSetupCompleted, setIsSetupCompleted] = useState<boolean>(false);

  // do the setup.
  useEffect(() => {
    NotificationHelper.scheduleNotification(1, QUOTES[0].time, QUOTES[0].text);

    setI18nConfig().then((_) => {
      setIsSetupCompleted(true);
    });
  }, []);

  // get the selected theme from theme context.
  const {selectedTheme} = useContext<IThemeContextProvider>(
    ThemeContext as any,
  );

  // if setup is not completed, do no thing.
  if (!isSetupCompleted) return null;

  return (
    <PaperProvider theme={THEME[selectedTheme]}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName={'SplashScreen'}>
          <MainStack.Screen
            name={'SplashScreen'}
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />

          <MainStack.Screen
            name={'HomeScreen'}
            component={HomeScreen}
            options={{
              headerTitle: () => null,
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

// Export as default.
export default App;

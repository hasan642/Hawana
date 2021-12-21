import React, {useContext, useEffect, useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {THEME} from 'theme';
import {ThemeContextState, ThemeContext, IThemeContextProvider} from 'context';
import {setI18nConfig} from 'i18n';
import {MainStackNavigator} from 'navigation/stacks';

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
      <MainStackNavigator />
    </PaperProvider>
  );
};

// Export as default.
export default App;

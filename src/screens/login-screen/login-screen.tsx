/**
 * login-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a home screen component.
 * created at: 21/12/2021
 */

import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {Text} from 'components';
import {translate} from 'i18n';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllStackNavParams} from 'navigation';

/**
 * type checking.
 */
interface LoginScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'LoginScreen'>;
}

/**
 * A fncction ccomponne that shows a login screen.
 */
function LoginScreen(p: LoginScreenProps) {
  // use top safe area inset.
  const {top: topInset} = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Text style={[styles.wlc, {marginTop: topInset}]}>
        {translate('loginScreen.welcome')}
      </Text>
      <Text style={styles.enterData}>
        {translate('loginScreen.enterDataToContinue')}
      </Text>
    </View>
  );
}

// export as default.
export default LoginScreen;

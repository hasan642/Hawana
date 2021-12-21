/**
 * login-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a home screen component.
 * created at: 21/12/2021
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { Text, TextField } from 'components';
import { translate } from 'i18n';
import { StackNavigationProp } from '@react-navigation/stack';
import { AllStackNavParams } from 'navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

/**
 * type checking.
 */
interface LoginScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'LoginScreen'>;
}
interface FormData {
  phoneNumber: string;
  password: string;
}

/**
 * A fncction ccomponne that shows a login screen.
 */
function LoginScreen(p: LoginScreenProps) {
  // use top safe area inset.
  const { top: topInset } = useSafeAreaInsets();

  // state.
  const [formData, setFormData] = useState<FormData>({ phoneNumber: '', password: '' });

  /**
   * Handles on chnage phone number.
   */
  const handleOnChnagPhoneNumber = (val: string) => {
    setFormData(v => ({ ...v, phoneNumber: val }));
  };

  /**
   * Handles on chnage phone number.
   */
  const handleOnChnagPassword = (val: string) => {
    setFormData(v => ({ ...v, password: val }));
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.internalContainer}>
          <Text style={[styles.wlc, { marginTop: topInset }]}>
            {translate('loginScreen.welcome')}
          </Text>
          <Text style={styles.enterData}>{translate('loginScreen.enterDataToContinue')}</Text>

          <View style={styles.inputsHolder}>
            <TextField
              onChangeText={handleOnChnagPhoneNumber}
              value={formData.phoneNumber}
              label={translate('common.phoneNumber')}
            />
            <TextField
              value={formData.password}
              onChangeText={handleOnChnagPassword}
              secureTextEntry
              label={translate('common.password')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

// export as default.
export default LoginScreen;

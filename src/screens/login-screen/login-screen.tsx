/**
 * login-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a home screen component.
 * created at: 21/12/2021
 */

import React, { useState, useRef } from 'react';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Text, TextField } from 'components';
import { translate } from 'i18n';
import { StackNavigationProp } from '@react-navigation/stack';
import { AllStackNavParams } from 'navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { commonStyles } from 'theme';
import styles from './styles';

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

  // refs.
  const passwordRef = useRef<any>(null);

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

  /**
   * Handles login press.
   */
  const handleLogin = () => {
    console.log('handle login');
  };

  /**
   * Handles creates new account press.
   */
  const createNewAccPress = () => {};

  /**
   * Focuses to password input.
   */
  const focusToPasswordInput = () => {
    passwordRef.current?.focus();
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
              handleSubmitEditing={focusToPasswordInput}
            />
            <TextField
              value={formData.password}
              onChangeText={handleOnChnagPassword}
              secureTextEntry
              label={translate('common.password')}
              containerStyle={commonStyles.marginT16}
              ref={passwordRef}
            />
          </View>

          <Button
            containerStyle={commonStyles.marginT40}
            handlePress={handleLogin}
            title={translate('loginScreen.signin')}
          />

          <Pressable onPress={createNewAccPress} style={styles.signUpContainer}>
            <Text style={styles.signupTxt}>{translate('loginScreen.createNewAcc')}</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

// export as default.
export default LoginScreen;
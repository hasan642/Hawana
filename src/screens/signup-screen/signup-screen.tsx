/**
 * signup-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a signup screen component.
 * created at: 21/12/2021
 */

import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ADIcon from 'react-native-vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Header, ScreenLoader, TextField } from 'components';
import { translate } from 'i18n';
import { commonStyles } from 'theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { AllStackNavParams } from 'navigation';
import { Api } from 'api';
import { ResponseKind } from 'api/api.types';
import { General } from 'helperes';

// type checking.
interface SignupScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'SignupScreen'>;
}
interface FormData {
  phoneNumber: string;
  password: string;
  username: string;
}

/**
 * A function component that shows a signup screen.
 */
function SignupScreen({ navigation }: SignupScreenProps) {
  // use top safe area inset.
  const { top: topInset } = useSafeAreaInsets();

  // refs.
  const passwordRef = useRef<any>(null);
  const phoneNumberRef = useRef<any>(null);

  // state.
  const [formData, setFormData] = useState<FormData>({
    phoneNumber: '',
    password: '',
    username: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoadning, setIsLoadning] = useState<boolean>(false);

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
   * Focuses to password input.
   */
  const focusToPasswordInput = () => {
    passwordRef.current?.focus();
  };

  /**
   * Handles icon eye press.
   */
  const handleEyeIconPress = () => {
    setIsPasswordVisible(v => !v);
  };

  /**
   * Handles signup.
   */
  const handleSignup = () => {
    setIsLoadning(true);
    const { phoneNumber, password, username } = formData;
    Api.signup({ phone_number: phoneNumber, password, name: username }).then(r => {
      if (r.kind === ResponseKind.ok) {
        General.showToast(translate('signupScreen.signupSuccess'), 'success');
        setIsLoadning(false);
      } else {
        setIsLoadning(false);
        General.showToast(r.error, 'error');
      }
    });
  };

  /**
   * Handles on chnage username.
   */
  const handleOnChangUsername = (val: string) => {
    setFormData(v => ({ ...v, username: val }));
  };

  /**
   * Focuses to phone number input.
   */
  const focusToPhoneNumberInput = () => {
    phoneNumberRef.current?.focus();
  };

  /**
   * check if btn enabled.
   */
  const isBtnEnabled = () => {
    return formData.phoneNumber && formData.password && formData.username;
  };

  return (
    <View style={styles.container}>
      <Header backOnly handleGoBack={navigation.goBack} />
      <KeyboardAwareScrollView>
        <ADIcon style={[styles.userIcon, { marginTop: topInset }]} name={'user'} />
        <View style={styles.internalContainer}>
          <View style={styles.inputsHolder}>
            <TextField
              onChangeText={handleOnChangUsername}
              value={formData.username}
              label={translate('common.username')}
              handleSubmitEditing={focusToPhoneNumberInput}
            />
            <TextField
              KeyboardType={'default'}
              onChangeText={handleOnChnagPhoneNumber}
              value={formData.phoneNumber}
              label={translate('common.phoneNumber')}
              handleSubmitEditing={focusToPasswordInput}
              ref={phoneNumberRef}
              containerStyle={commonStyles.marginT16}
            />
            <TextField
              value={formData.password}
              onChangeText={handleOnChnagPassword}
              secureTextEntry={!isPasswordVisible}
              rightIconName={isPasswordVisible ? 'eye' : 'eye-off'}
              handleRightIconPress={handleEyeIconPress}
              label={translate('common.password')}
              containerStyle={commonStyles.marginT16}
              ref={passwordRef}
            />
          </View>

          <Button
            disabled={!isBtnEnabled()}
            style={commonStyles.marginT40}
            handlePress={handleSignup}
            title={translate('signupScreen.signup')}
          />
        </View>
      </KeyboardAwareScrollView>

      {isLoadning && <ScreenLoader />}
    </View>
  );
}

// export as default.
export default SignupScreen;

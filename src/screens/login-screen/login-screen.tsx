/**
 * login-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a home screen component.
 * created at: 21/12/2021
 */

import React, { useState, useRef } from 'react';
import { Platform, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, ScreenLoader, Text, TextField } from 'components';
import { translate } from 'i18n';
import { StackNavigationProp } from '@react-navigation/stack';
import { AllStackNavParams } from 'navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { commonStyles } from 'theme';
import styles from './styles';
import ADIcon from 'react-native-vector-icons/AntDesign';
import { loginUser, useReduxDispatch, userSelector } from 'state';
import { useSelector } from 'react-redux';

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
function LoginScreen({ navigation }: LoginScreenProps) {
  // use top safe area inset.
  const { top: topInset } = useSafeAreaInsets();

  // use redux state.
  const { loading } = useSelector(userSelector);

  // ude dispatch.
  const d = useReduxDispatch();

  // refs.
  const passwordRef = useRef<any>(null);

  // state.
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

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
    d(
      loginUser(
        {
          phone_number: formData.phoneNumber,
          password: formData.password,
          fcm_token: '',
          last_platform_login: Platform.OS,
        },
        () => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'AppStack' }],
          });
        }
      )
    );
  };

  /**
   * Handles creates new account press.
   */
  const createNewAccPress = () => {
    navigation.navigate('SignupScreen');
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
   * check if btn enabled.
   */
  const isBtnEnabled = () => {
    return formData.phoneNumber && formData.password;
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <ADIcon style={[styles.userIcon, { marginTop: topInset }]} name={'user'} />
        <View style={styles.internalContainer}>
          <Text style={styles.wlc}>{translate('loginScreen.welcome')}</Text>
          <Text style={styles.enterData}>{translate('loginScreen.enterDataToContinue')}</Text>

          <View style={styles.inputsHolder}>
            <TextField
              KeyboardType={'phone-pad'}
              onChangeText={handleOnChnagPhoneNumber}
              value={formData.phoneNumber}
              label={translate('common.phoneNumber')}
              handleSubmitEditing={focusToPasswordInput}
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
            style={commonStyles.marginT40}
            handlePress={handleLogin}
            title={translate('loginScreen.signin')}
            disabled={!isBtnEnabled()}
          />

          <Pressable onPress={createNewAccPress} style={styles.signUpContainer}>
            <Text style={styles.signupTxt}>{translate('loginScreen.createNewAcc')}</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>

      {loading && <ScreenLoader />}
    </View>
  );
}

// for test.
const initialFormData = {
  phoneNumber: __DEV__ ? '0780000000' : '',
  password: __DEV__ ? '123456' : '',
};

// export as default.
export default LoginScreen;

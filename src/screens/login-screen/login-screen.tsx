/**
 * login-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a home screen component.
 * created at: 21/12/2021
 */

import React, { useState, useRef } from 'react';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, ScreenLoader, Text, TextField } from 'components';
import { translate } from 'i18n';
import { StackNavigationProp } from '@react-navigation/stack';
import { AllStackNavParams } from 'navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { commonStyles } from 'theme';
import styles from './styles';
import ADIcon from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';
import { General, StorageHelper } from 'helperes';
import { Api, ApiTypes } from 'api';

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

  // refs.
  const passwordRef = useRef<any>(null);

  // state.
  const [formData, setFormData] = useState<FormData>({ phoneNumber: '', password: '' });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isloading, setIsloading] = useState<boolean>(false);

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
  const handleLogin = async () => {
    setIsloading(true);
    // get and send fcm token to the user.
    const tokenFromStorage = await StorageHelper.get('@fcmToken');
    console.log('tokenFromStorage', tokenFromStorage);
    Api.login({
      phoneNumber: formData.phoneNumber,
      password: formData.password,
      fcm_token: tokenFromStorage,
    }).then(r => {
      if (r.kind === ApiTypes.ResponseKind.ok) {
        setIsloading(false);
      } else {
        setIsloading(false);
        General.showToast(translate('loginScreen.loginError'), 'error');
      }
    });
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
            containerStyle={commonStyles.marginT40}
            handlePress={handleLogin}
            title={translate('loginScreen.signin')}
            disabled={!isBtnEnabled()}
          />

          <Pressable onPress={createNewAccPress} style={styles.signUpContainer}>
            <Text style={styles.signupTxt}>{translate('loginScreen.createNewAcc')}</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>

      {isloading && <ScreenLoader />}
    </View>
  );
}

// export as default.
export default LoginScreen;

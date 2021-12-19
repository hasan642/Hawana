/**
 * SplashScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a SplashScreen component.
 * created at: 21/12/2020
 */

import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Image, Platform, View} from 'react-native';
import styles from './styles';
import {Text} from 'components';
import {useTheme} from 'react-native-paper';
import {AllStackNavParams} from 'navigation/types';
import {APP_NAME} from 'config';
import {translate} from 'i18n';
import PushNotification from 'react-native-push-notification';
import {NotificationHelper} from 'helperes';

/**
 * type checking
 */
interface SplashScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'SplashScreen'>;
}

/**
 * A function component that shows a SplashScreen.
 */
function SplashScreen({navigation}: SplashScreenProps) {
  // use paper theme.
  const {colors: themeColors} = useTheme();

  // navgates to home screen.
  useEffect(() => {
    // register all scheduled and go to app.
    function doTheMagic() {
      // scedule notifications.
      NotificationHelper.scheduleNotificationsForAllTheDay();

      // navigate to home.
      setTimeout(() => {
        navigation.navigate('HomeScreen');
      }, 2000);
    }

    if (Platform.OS === 'android') {
      doTheMagic();
      return;
    }
    PushNotification.requestPermissions(['alert', 'badge', 'sound']).then(
      (_) => {
        doTheMagic();
      },
    );
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: themeColors.primary}]}>
      <View style={styles.quotesContainer}>
        <Image
          source={require('assets/left-quote.png')}
          style={styles.quoteImg}
          resizeMode="contain"
        />

        <Text style={styles.appName}>{` ${APP_NAME} `}</Text>

        <Image
          source={require('assets/right-quote.png')}
          style={styles.quoteImg}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.msg}>{translate('splashScreen.writeQuotes')}</Text>
    </View>
  );
}

/**
 * export as default.
 */
export default SplashScreen;

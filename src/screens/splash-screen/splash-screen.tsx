/**
 * splash-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a splash screen component.
 * created at: 21/12/2020
 */

import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, Platform, View } from 'react-native';
import styles from './styles';
import { Text } from 'components';
import { useTheme } from 'react-native-paper';
import { AllStackNavParams } from 'navigation/types';
import { APP_NAME } from 'config';
import { translate } from 'i18n';
import PushNotification from 'react-native-push-notification';
import { NotificationHelper, StorageHelper } from 'helperes';
import { updateUser, useReduxDispatch } from 'state';

/**
 * type checking
 */
interface SplashScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'SplashScreen'>;
}

/**
 * A function component that shows a SplashScreen.
 */
function SplashScreen({ navigation }: SplashScreenProps) {
  // use paper theme.
  const { colors: themeColors } = useTheme();

  // use dispatch.
  const d = useReduxDispatch();

  // navgates to home screen.
  useEffect(() => {
    // register all scheduled and go to app.
    async function doTheMagic() {
      PushNotification.localNotificationSchedule({
        message: 'My Notification Message.snd,and,amsnd', // (required)
        date: new Date(Date.now() + 10 * 1000), // in 60 secs
        actions: ['ReplyInput'],
        reply_placeholder_text: 'Write your response...', // (required)
        reply_button_text: 'Reply', // (required)
      });
      // scedule notifications.
      NotificationHelper.scheduleNotificationsForAllTheDay();

      const user = await StorageHelper.get('@currentUser');
      let nextRoute: keyof AllStackNavParams = 'AuthStack';
      if (user !== null) {
        d(updateUser(user));
        nextRoute = 'AppStack';
      }

      // navigate to home.
      navigation.reset({
        index: 0,
        routes: [{ name: nextRoute }],
      });
    }

    if (Platform.OS === 'android') {
      doTheMagic();
      return;
    }
    PushNotification.requestPermissions(['alert', 'badge', 'sound']).then(_ => {
      doTheMagic();
    });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.primary }]}>
      <View style={styles.quotesContainer}>
        <Image
          source={require('assets/left-quote.png')}
          style={styles.quoteImg}
          resizeMode='contain'
        />

        <Text style={styles.appName}>{` ${APP_NAME} `}</Text>

        <Image
          source={require('assets/right-quote.png')}
          style={styles.quoteImg}
          resizeMode='contain'
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

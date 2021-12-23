/**
 * notification-listener.tsx
 * developed by Hasan Alawneh.
 * A file that contains a notification listener (no UI).
 * created at: 22/12/2021
 */

import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { StorageHelper } from 'helperes';
import { Platform } from 'react-native';

/**
 * A function component wih no UI to listen to notifications.
 */
function NotificationListener() {
  // add listeners.
  useEffect(() => {
    requestUserPermission();

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('forground notification', remoteMessage);
    });

    return unsubscribe;
  }, []);

  /**
   * Requests permission for iOS.
   */
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission({
      sound: true,
      announcement: true,
      criticalAlert: true,
      alert: true,
      badge: false,
      provisional: true,
    });
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      const tokenFromStorage = await StorageHelper.get('@fcmToken');
      if (!tokenFromStorage) {
        messaging()
          .getToken()
          .then(async token => {
            StorageHelper.save('@fcmToken', token).catch(e => {
              console.log('ERROE: save token to storage', e);
            });
          })
          .catch(e => {
            console.log('ERROR: generate fcm token', e);
          });
      }
    }
  };

  return null;
}

// export as default.
export default NotificationListener;

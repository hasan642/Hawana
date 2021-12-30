// useful for expo-updates
import 'expo-asset';

// useful for react-navigation.
import 'react-native-gesture-handler';

import React from 'react';
import { Platform, StatusBar } from 'react-native';
import App from './App';
import { COLOR } from 'theme';
import { NotificationHelper } from 'helperes';
import messaging from '@react-native-firebase/messaging';
import { registerRootComponent } from 'expo';
import moment from 'moment';
import PushNotification from 'react-native-push-notification';

// enable reactotron.
__DEV__ && require('./ReactotronConfig');

// set status bar to light (Android).
if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(COLOR.light);
    StatusBar.setBarStyle('dark-content');
};

// init notifications.
NotificationHelper.init();


// Register background handler
// if "notificationType" is silent that means we should schedule
// a new notification in some date and time.
// if not silent no need for it here.
messaging().setBackgroundMessageHandler(async remoteMessage => {
    try {

        NotificationHelper.init();

        const notificationType = remoteMessage.data?.notification_type || null;
        if (notificationType === 'silent') {
            const notificationSchedulingTime = remoteMessage.data?.scheduling_time || null;
            const notificationSchedulingTitle = remoteMessage.data?.title || null;
            const notificationSchedulingBody = remoteMessage.data?.body || null;

            // handle the date and schedule notification.
            const [day, hours, minutes] = notificationSchedulingTime.split(':');
            console.log('day', day.trim())
            const notificationTime = new Date(day);
            console.log('notificationTimenotificationTimenotificationTimenotificationTime', notificationTime)
            console.log('hours, minutes', hours, minutes)
            notificationTime.setHours(hours, minutes, 0, 0);
            console.log('notificationTime', notificationTime)

            const x = new Date();
            x.setHours(2, 43, 0, 0);
            NotificationHelper.scheduleNotification(remoteMessage.sentTime, notificationSchedulingTitle, notificationSchedulingBody, x);

        }
    } catch (e) {
        console.log('e', e)
    }
});

// to prevent iOS app from mounting when recieve notifications in background.
function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        // App has been launched in the background by iOS, ignore
        return null;
    }

    return <App />;
}


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(HeadlessCheck);
// useful for react-navigation.
import 'react-native-gesture-handler';

import React from 'react';
import { Platform, StatusBar, AppRegistry } from 'react-native';
import App from './App';
import { COLOR } from 'theme';
import { NotificationHelper } from 'helperes';
import messaging from '@react-native-firebase/messaging';
import { name as appName } from './app.json';
import moment from 'moment';
import PushNotification from 'react-native-push-notification';
import BackgroundFetch from "react-native-background-fetch";

// enable reactotron.
__DEV__ && require('./ReactotronConfig');

// set status bar to light (Android).
if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(COLOR.light);
    StatusBar.setBarStyle('dark-content');
};

// init notifications.
// NotificationHelper.init();


// Register background handler
// if "notificationType" is silent that means we should schedule
// a new notification in some date and time.
// if not silent no need for it here.
messaging().setBackgroundMessageHandler(async remoteMessage => {
    try {
        // PushNotification.configure({
        //     onRegister: x => {
        //         console.log('register222222', x);

        //         PushNotification.localNotificationSchedule({
        //             message: 'My Notification Message.snd,and,amsnd', // (required)
        //             date: new Date(Date.now() + 10 * 1000), // in 60 secs
        //             actions: ['ReplyInput'],
        //             reply_placeholder_text: 'Write your response...', // (required)
        //             reply_button_text: 'Reply', // (required)
        //         });
        //     },

        //     // just iOS needs permission.
        //     requestPermissions: Platform.OS === 'ios',

        //     // (required) Called when a remote is received or opened, or local notification is opened
        //     onNotification: function (notification) {
        //         // console.log('NOTIFICATION:', notification);

        //         // (required) Called when a remote is received or opened, or local notification is opened
        //         notification.finish(PushNotificationIOS.FetchResult.NoData);
        //     },

        //     // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
        //     onAction: function (notification) {
        //         // console.log('ACTION:', notification.action);
        //         // console.log('NOTIFICATION:', notification);
        //     },

        //     // IOS ONLY (optional): default: all - Permissions to register.
        //     permissions: {
        //         alert: true,
        //         badge: true,
        //         sound: true,
        //     },

        //     // Should the initial notification be popped automatically
        //     // default: true
        //     popInitialNotification: true,
        // });
        NotificationHelper.init();
        console.log('XXXXXXX');

        const notificationType = remoteMessage.data?.notification_type || null;
        console.log('notificationType', notificationType)
        if (notificationType === 'silent') {
            // const notificationSchedulingTime = remoteMessage.data?.scheduling_time || null;
            // const notificationSchedulingTitle = remoteMessage.data?.title || null;
            // const notificationSchedulingBody = remoteMessage.data?.body || null;
        }

        // PushNotification.localNotificationSchedule({
        //     message: 'My Notification Message.snd,and,amsnd', // (required)
        //     date: new Date(Date.now() + 10 * 1000), // in 60 secs
        //     actions: ['ReplyInput'],
        //     reply_placeholder_text: 'Write your response...', // (required)
        //     reply_button_text: 'Reply', // (required)
        // });

        console.log('scheduled');

    } catch (e) {
        console.log('e', e)
    }
});

BackgroundFetch.configure(
    {
        minimumFetchInterval: 15,
        stopOnTerminate: false,
        startOnBoot: true
    },
    () => {
        console.log("Received background fetch event");

        BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_NEW_DATA);
    },
    (error) => {
        console.log("Background fetch failed to start with error: " + error);
    }
);

// to prevent iOS app from mounting when recieve notifications in background.
function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        // App has been launched in the background by iOS, ignore
        return null;
    }

    return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
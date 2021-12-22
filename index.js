// useful for react-navigation.
import 'react-native-gesture-handler';

import React from 'react';
import { AppRegistry, Platform, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { COLOR } from 'theme';
import { NotificationHelper } from 'helperes';
import messaging from '@react-native-firebase/messaging';
// import TTT from './TEST';

// set status bar to light (Android).
if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(COLOR.light);
    StatusBar.setBarStyle('dark-content');
};

// init notifications.
NotificationHelper.init();


// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

// to prevent iOS app from mounting when recieve notifications in background.
function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        // App has been launched in the background by iOS, ignore
        return null;
    }

    return <App />;
}

// register the app.
AppRegistry.registerComponent(appName, () => HeadlessCheck);
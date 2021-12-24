// useful for react-navigation.
import 'react-native-gesture-handler';

import React from 'react';
import { Platform, StatusBar } from 'react-native';
import App from './App';
import { COLOR } from 'theme';
import { NotificationHelper } from 'helperes';
import messaging from '@react-native-firebase/messaging';
import { registerRootComponent } from 'expo';
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


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(HeadlessCheck);
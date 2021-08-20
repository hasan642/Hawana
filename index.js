// useful for react-navigation.
import 'react-native-gesture-handler';

import { AppRegistry, Platform, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { COLOR } from 'theme';
import { NotificationHelper } from 'helperes';
// import TTT from './TEST';

// set status bar to light (Android).
if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(COLOR.light);
    StatusBar.setBarStyle('dark-content');
};

// init notifications.
NotificationHelper.init();

// register the app.
AppRegistry.registerComponent(appName, () => App);
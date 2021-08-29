/**
 * notification.ts
 * developed by Hasan Alawneh.
 * A file that contains a storage helper.
 * created at: 20/08/2021
 */

import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {LOCAL_NOTIFICATION_SOUND_NAME, QUOTES} from 'config';
import PushNotification from 'react-native-push-notification';

/**
 * init notifications config
 */
export function init() {
  // clear badge number.
  PushNotification.setApplicationIconBadgeNumber(0);

  // Must be outside of any component LifeCycle (such as `componentDidMount`).
  PushNotification.configure({
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);

      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);

      // process the action
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
    requestPermissions: true,
  });
}

/**
 * Schedule notifications for all the day.
 */
export function scheduleNotificationsForAllTheDay() {
  // schedule for '12:12 AM'
  // const date12And12 = new Date();
  // date12And12.setHours(24, 12, 0, 0);
  // scheduleNotification(1, QUOTES[0].time, QUOTES[0].text, date12And12);
  // schedule for '01:01 AM'
  // const date1And1 = new Date();
  // date1And1.setHours(1, 1, 0, 0);
  // scheduleNotification(2, QUOTES[1].time, QUOTES[1].text, date1And1);
  // // schedule for '02:02 AM'
  // const date2And2 = new Date();
  // date12And12.setHours(2, 2, 0, 0);
  // scheduleNotification(3, QUOTES[2].time, QUOTES[2].text, date2And2);
  // // schedule for '03:03 AM'
  // const date3And3 = new Date();
  // date12And12.setHours(3, 3, 0, 0);
  // scheduleNotification(4, QUOTES[3].time, QUOTES[3].text, date3And3);
  // // schedule for '04:04 AM'
  // const date4And4 = new Date();
  // date12And12.setHours(4, 4, 0, 0);
  // scheduleNotification(5, QUOTES[4].time, QUOTES[4].text, date4And4);
  // // schedule for '05:05 AM'
  // const date5And5 = new Date();
  // date12And12.setHours(5, 5, 0, 0);
  // scheduleNotification(6, QUOTES[5].time, QUOTES[5].text, date5And5);
  // // schedule for '06:06 AM'
  // const date6And6 = new Date();
  // date12And12.setHours(6, 6, 0, 0);
  // scheduleNotification(7, QUOTES[6].time, QUOTES[6].text, date6And6);
  // // schedule for '07:07 AM'
  // const date7And7 = new Date();
  // date12And12.setHours(7, 7, 0, 0);
  // scheduleNotification(8, QUOTES[7].time, QUOTES[7].text, date7And7);
  // // schedule for '08:08 AM'
  // const date8And8 = new Date();
  // date12And12.setHours(8, 8, 0, 0);
  // scheduleNotification(9, QUOTES[8].time, QUOTES[8].text, date8And8);
  // // schedule for '09:09 AM'
  // const date9And9 = new Date();
  // date12And12.setHours(9, 9, 0, 0);
  // scheduleNotification(10, QUOTES[9].time, QUOTES[9].text, date9And9);
  // // schedule for '10:10 AM'
  // const date10And10 = new Date();
  // date12And12.setHours(10, 10, 0, 0);
  // scheduleNotification(11, QUOTES[10].time, QUOTES[10].text, date10And10);
  // // schedule for '11:11 AM'
  // const date11And11 = new Date();
  // date12And12.setHours(11, 11, 0, 0);
  // scheduleNotification(12, QUOTES[11].time, QUOTES[11].text, date11And11);
}

/**
 * Schdule notification.
 */
export function scheduleNotification(
  id: number,
  title: string,
  msg: string,
  date: Date,
) {
  PushNotification.localNotificationSchedule({
    date,
    // repeatType: 'day',

    /* Android Only Properties */
    // channelId: 'default-channel-id',
    ticker: 'My Notification Ticker', // (optional)
    autoCancel: false, // (optional) default: true
    largeIcon: 'ic_launcher',
    smallIcon: 'ic_launcher', // (optional) default: "ic_notification" with fallback for "ic_launcher"
    bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
    subText: 'This is a subText', // (optional) default: none
    color: 'blue', // (optional) default: system default
    vibrate: true, // (optional) default: true
    vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
    tag: 'some_tag', // (optional) add tag to message
    group: 'group', // (optional) add group to message
    groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
    ongoing: false, // (optional) set whether this is an "ongoing" notification
    // actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
    invokeApp: false, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

    when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
    usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
    timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

    /* iOS only properties */
    category: '', // (optional) default: empty string

    /* iOS and Android properties */
    id, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
    title, // (optional)
    message: msg, // (required)
    userInfo: {sceen: 'home'}, // (optional) default: {} (using null throws a JSON value '<null>' error)
    playSound: true, // (optional) default: true
    soundName: LOCAL_NOTIFICATION_SOUND_NAME, // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    number: 0, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
  });
}

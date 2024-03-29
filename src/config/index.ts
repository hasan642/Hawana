/**
 * config.ts
 * developed by Hasan Alawneh.
 * A file that contains a config for the app.
 * created at: 29/07/2021
 */

import { Platform } from 'react-native';

export * from './expo-env';

export const APP_NAME = 'HAWANA';
export const LOCAL_NOTIFICATION_SOUND_NAME = 'notification-sound.mp3';
export const ANDROID_NOTIFICATION_CHANNEL_NAME = 'hawana_android_notification_channel';
export const ANDROID_NOTIFICATION_CHANNEL_ID = 'hawana_android_notification_channel_ID';
// export const LOCAL_NOTIFICATION_SOUND_NAME = Platform.select({
//   android: 'notificatiosound.mp3',
//   ios: 'notification-sound.mp3',
// });
export const QUOTES = [
  {
    text: 'الزهرة التي تزهر في الشدائد هي الأكثر جمالاً وندرة على الإطلاق.',
    time: '12:12',
    bg: 'red',
  },
  {
    text: 'إنَّ الله يقذف الحب في قلوبنا، فلا تسأل مُحبًا .. لماذا أحببت ❤️',
    time: '01:01',
    bg: 'blue',
  },
  {
    text:
      'من غير المعقول أن يجد أحدنا شخصاً يحبه ويدعمه أكثر من والديه، حتى لو كانا قاسييْن عليه في بعض اللحظات، ومن المهم جداً البحث عن طريقة لإحياء العلاقة بينكم.',
    time: '02:02',
    bg: 'yellow',
  },
  {
    text: 'بعض الأشخاص لا يؤمنون بأنفسهم حتى يؤمن بهم شخص آخر.',
    time: '03:03',
    bg: 'green',
  },
  {
    text: '‏وحيثُما وجدتَ سَكِينةَ روحك، أقِم؛ فذاكَ موطِنُك',
    time: '04:04',
    bg: 'red',
  },
  {
    text:
      'نحن في هذه الدنيا في امتحان، وفي أي لحظة قد يتم سحب ورقتك، وينتهي الوقت الذي خصصه الله لك، فضلاً ركز في ورقتك، واترك ورقة غيرك.',
    time: '05:05',
    bg: 'purple',
  },
  {
    text: 'لا تجعل طيبتك كتاب يتصفحه الجميع؛ فهناك أناس لا يستحقون منه حرفاً.',
    time: '06:06',
    bg: 'red',
  },
  {
    text:
      'أعتقد أن أثمن ما يمكن أن تحاول الحصول عليه في خضم الحياة أن يبقى قلبك نقيًّا سليمًا أن تشعر بخفته نهاية كل ليلة مهما عاثت فيه الأيام وساءت إليه الأشياء.‏',
    time: '07:07',
    bg: 'green',
  },
  {
    text: 'يُمكن للإنسان أن يعيش بلا بَصر، ولكنه لا يمكن أن يعيش بلا أمل.',
    time: '08:08',
    bg: 'blue',
  },
  {
    text: 'الآمال العظيمة تصنع الأشخاص العظماء.',
    time: '09:09',
    bg: 'blue',
  },
  {
    text: 'جميع الناس يموتون، لكن ليس جميعهم يعيشون بشكل صحيح ويعدن أحياءً.',
    time: '10:10',
    bg: 'yellow',
  },
  {
    text: 'هُناك دائماً شخص مُختلف ، يمكنه أن يسرق ثقل هذا العالم عن كتفيك دُون أن تشعر.',
    time: '11:11',
    bg: 'green',
  },
];

# Chatsy

### Installation

```sh
$ git clone https://github.com/hasanal1995/chat-app-reactnative.git
$ cd chat-app-reactnative
$ yarn
$ cd ios && pod install
```

### Running for Android

```sh
$ yarn android
```

### Running for iOS

```sh
$ yarn ios
```

### Plugins

Chatsy is currently extended with the following plugins.

| Plugin                      | Read more                                        |
| --------------------------- | ------------------------------------------------ |
| React Native Navigation/Wix | [https://github.com/wix/react-native-navigation] |

# Expo OTA (over the air updates)

### supported release channels:

- `staging-channel`: used for test (etc: QA testing).
- `prod-v1`: used for production.

### steps to publish:

- go to `Expo.plist` and change `EXUpdatesReleaseChannel` to `release-channel-name`.
- go to `AndroidManifest.xml` and change `expo.modules.updates.EXPO_RELEASE_CHANNEL` to `release-channel-name`.
- run `expo publish --release-channel release-channel-name`.
  ,

### get last published release channel details:

- `https://exp.host/@zenhr/zenhr/index.exp?release-channel={release-channel-name}&sdkVersion=44.0.0`

---

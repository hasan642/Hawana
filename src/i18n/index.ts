/**
 * i18n.ts
 * developed by Hasan Alawneh.
 * A file that contains an i18n config for the app
 * * localization.
 * created at: 29/07/2021
 */

import memoize from "lodash.memoize";
import i18n from "i18n-js";
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import { supportedLocales } from "./locales";

/**
 * translate function.
 */
export const translate = memoize(
    (key: string, config = {}) => i18n.t(key, config),
    (key: string, config) => (config ? key + JSON.stringify(config) : key),
);

/**
 * detects if isRTL.
 */
export const IS_RTL = I18nManager.isRTL;
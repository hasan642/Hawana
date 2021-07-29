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
import { locales, supportedLocales } from "./locales";
import { StorageHelper } from "helperes";

/**
 * translate function.
 */
export const translate = memoize(
    (key: string, config = {}) => i18n.t(key, config),
    (key: string, config) => (config ? key + JSON.stringify(config) : key),
);

/**
 * set config.
 */
export async function setI18nConfig(): Promise<boolean> {

    /**
     * get current language from storage.
     */
    const currentLanguageFromStorage = await StorageHelper.get('@language');

    /**
     * final lang.
     */
    const language: string = currentLanguageFromStorage || supportedLocales.en;

    /**
     * set i18n-js config.
     */
    i18n.translations = { [language]: locales[language]() };
    i18n.locale = language;

    // return true if every thing is OK.
    return true;
};

/**
 * Chnages the app language and restart.
 */
export function changeLanguage(lang: keyof typeof locales) {
    i18n.locale = lang;
    StorageHelper.save(
        '@language',
        lang
    );
    I18nManager.forceRTL(lang === 'ar');

    // restart the app.
    RNRestart.Restart();
};

/**
 * detects if isRTL.
 */
export const IS_RTL = I18nManager.isRTL;
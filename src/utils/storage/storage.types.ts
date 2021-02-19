/**
 * storage/storage.types.ts
 * developed by Hasan Alawneh.
 * A types of storage.
 * created at: 19/02/2021
 */

import { LanguagesKeys } from 'i18n';

/**
 * The keys types.
 */
export type Key = '@Language';


/**
 * The language model.
 */
export interface LanguageModel {
    lang: LanguagesKeys;
    isRTL: boolean;
};

/**
 * The type of storage models.
 */
export type StorageModel = LanguageModel;
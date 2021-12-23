/**
 * index.ts
 * developed by Hasan Alawneh.
 * A namespacing file for helpers
 * created at: 29/07/2021
 */
import * as NotificationHelper from './notification';
import * as General from './general';

export { default as StorageHelper } from './storage/storage';
export { NotificationHelper, General };

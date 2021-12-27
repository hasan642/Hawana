/**
 * storage.types.ts
 * developed by Hasan Alawneh.
 * A file that contains a storage types.
 * created at: 29/07/2021
 */

import { ApiTypes } from 'api';

// storage keys.
export type StorageKeys = '@language' | '@fcmToken' | '@currentUser';

// export all.
export type SaveStorageParamList = {
  ['@language']: string;
  ['@fcmToken']: string;
  ['@currentUser']: ApiTypes.User;
};

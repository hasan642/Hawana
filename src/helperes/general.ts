/**
 * general.ts
 * developed by Hasan Alawneh.
 * A file that contains a general helpers for the app.
 * created at: 22/12/2021
 */

import Toast from 'react-native-toast-message';

/**
 * Shows a toast.
 */
export function showToast(msg: string, type: 'success' | 'error', visibilityTime = 2500) {
  try {
    Toast.show({ text1: msg, type, visibilityTime });
  } catch (e) {
    console.log('ERROR: show toast function', e);
  }
}

/**
 * expo-env.ts
 * developed by Hasan Alawneh.
 * A file that contains an expo environment for the app.
 * created at: 24/12/2021
 */

import { RELEASE_CHANNEL, REVISION_ID, SDK_VERSION } from './constants';

/**
 * Returns the product env and version for the app
 * (expo-updates)
 */
export function getVersionDetails(): string {
  try {
    const c = RELEASE_CHANNEL || 'Development';
    const v = REVISION_ID || '-';
    return `Version: ${v}, Channel: ${c}, SDK: ${SDK_VERSION}`;
  } catch (e) {
    console.log('ERROR: getVersionDetails_function', e);
  }
}

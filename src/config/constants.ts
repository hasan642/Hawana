/**
 * constants.ts
 * developed by Hasan Alawneh.
 * A file that contains a useful constants for the app.
 * created at: 24/12/2021
 */

import Constants from 'expo-constants';

// all base urls.
export const BASE_URLS = {
  prod: 'https://www.zenhr.com',
  stg: 'https://staging.zenhr.com',
};

// all realese channels.
export const RELEASE_CHANNELS = {
  staging: 'stg',
  productionV6: 'prod-v1',
};

// expo env config.
export const RELEASE_CHANNEL = Constants.manifest?.releaseChannel;
export const SDK_VERSION = Constants.manifest?.sdkVersion;
export const REVISION_ID = Constants.manifest?.revisionId;

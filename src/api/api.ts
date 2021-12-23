/**
 * api.ts
 * developed by Hasan Alawneh.
 * A file that contains an api helpers.
 * created at: 22/12/2021
 */

import axios from './instance';
import * as ApiTypes from './api.types';

/**
 * Handles the signup for the user.
 */
export async function signup(p: ApiTypes.SignupPayload): ApiTypes.ISignupResponse {
  try {
    const r = await axios.post('users/addNewUser', p);
    console.log('RRRR', r.data);
    return {
      kind: ApiTypes.ResponseKind.ok,
    };
  } catch (e) {
    console.log('ERROR: signup_function', e);
    return {
      kind: ApiTypes.ResponseKind.reject,
      error: e.message,
    };
  }
}

/**
 * Handles the login for the user.
 */
export async function login(p: ApiTypes.LoginPayload): ApiTypes.ILoginResponse {
  try {
    const r = await axios.post('users/login', p);
    console.log('RRRR', r.data);
    return {
      kind: ApiTypes.ResponseKind.ok,
    };
  } catch (e) {
    console.log('ERROR: login_function', e);
    return {
      kind: ApiTypes.ResponseKind.reject,
      error: e.message,
    };
  }
}

/**
 * Schedules a new notification.
 */
export async function scheduleNotification(
  p: ApiTypes.ScheduleNotificationPayload
): ApiTypes.ILoginResponse {
  try {
    const r = await axios.post('firebase/pushNotification', p);
    console.log('RRRR', r.data);
    return {
      kind: ApiTypes.ResponseKind.ok,
    };
  } catch (e) {
    console.log('ERROR: scheduleNotification_function', e);
    return {
      kind: ApiTypes.ResponseKind.reject,
      error: e.message,
    };
  }
}

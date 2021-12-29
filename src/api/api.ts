/**
 * api.ts
 * developed by Hasan Alawneh.
 * A file that contains an api helpers.
 * created at: 22/12/2021
 */

import axios from './instance';
import * as ApiTypes from './api.types';
import { translate } from 'i18n';
import { API_BASE_URL } from '@env';

/**
 * Handles the signup for the user.
 */
export async function signup(p: ApiTypes.SignupPayload): ApiTypes.ISignupResponse {
  try {
    await axios.post('users/addNewUser', p);
    return {
      kind: ApiTypes.ResponseKind.ok,
    };
  } catch (e) {
    console.log('ERROR: signup_function', e);
    let errorMsg = e.message;
    if (e.response.data?.errorCode === 'USER_EXIST') {
      errorMsg = translate('signupScreen.userAlreadyError');
    }

    return {
      kind: ApiTypes.ResponseKind.reject,
      error: errorMsg,
    };
  }
}

/**
 * Handles the login for the user.
 */
export async function login(p: ApiTypes.LoginPayload): ApiTypes.ILoginResponse {
  try {
    const r = await axios.post('users/login', p);
    const user = r.data;
    return {
      kind: ApiTypes.ResponseKind.ok,
      user: {
        name: user.name,
        id: user._id,
        profilePic: `${API_BASE_URL}/${user.profile_picture}`,
      },
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
 * Fetches all users.
 */
export async function getAllUsers(): ApiTypes.IGetAllUsersResponse {
  try {
    const r = await axios.get('users/getUsers');

    // transform raw to user.
    function transformRaw2User(raw: any) {
      return {
        id: raw._id,
        name: raw.name,
        profilePic: `${API_BASE_URL}/${raw.profile_picture}`,
      } as ApiTypes.User;
    }

    return {
      kind: ApiTypes.ResponseKind.ok,
      users: r.data.users.map(transformRaw2User),
    };
  } catch (e) {
    console.log('ERROR: getAllUsers_function', e);
  }
}

/**
 * Schedules a new notification.
 */
export async function scheduleNotification(
  p: ApiTypes.ScheduleNotificationPayload
): ApiTypes.IScheduleNotificationResponse {
  try {
    console.log('DDDDD', p);
    await axios.post('firebase/pushNotification', p);
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

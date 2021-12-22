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
    const r = await axios.post('users/addNewUser', {
      phone_number: p.phoneNumber,
      password: p.password,
    });
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

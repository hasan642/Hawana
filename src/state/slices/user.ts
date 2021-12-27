/**
 * user.ts
 * developed by Hasan Alawneh.
 * A file that contains a user slice.
 * created at: 27/12/2021
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Api, ApiTypes } from 'api';
import { StorageHelper, General } from 'helperes';
import { Dispatch } from 'react';
import { UserState } from 'state/state.types';

/**
 * The initial state.
 */
const initialState: UserState = {
  user: null,
  loading: false,
};

/**
 * create a user slice.
 */
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUser: state => {
      state.loading = true;
    },
    loadUserFail: state => {
      state.loading = false;
    },
    loadUserSuccess: (state, { payload: user }: PayloadAction<ApiTypes.User>) => {
      state.user = user;
      state.loading = false;
    },
    reset: state => {
      state = initialState;
    },
  },
});

/**
 * grap the actions.
 */
const { loadUser, loadUserSuccess, reset, loadUserFail } = userSlice.actions;

/**
 * A function that handles user login.
 */
export function loginUser(p: ApiTypes.LoginPayload, onSuccess?: () => void) {
  return async (dispatch: Dispatch<any>) => {
    try {
      /**
       * enable loader.
       */
      dispatch(loadUser());

      /**
       * create user api.
       */
      const tokenFromStorage = await StorageHelper.get('@fcmToken');
      p.fcm_token = tokenFromStorage;
      const createdUserResponse = await Api.login(p);
      console.log('createdUserResponse', createdUserResponse);
      /**
       * hanlde if not OK.
       */
      if (createdUserResponse.kind !== 'OK') {
        dispatch(loadUserFail());
        General.showToast(createdUserResponse.error, 'error');
        return;
      }

      /**
       * save user data to storage.
       */
      await StorageHelper.save('@currentUser', createdUserResponse.user);

      // execute on success function.
      onSuccess();

      /**
       * save user to redux.
       */
      dispatch(loadUserSuccess(createdUserResponse.user));

      /**
       * reset user state.
       */
      dispatch(reset());
    } catch (e) {
      console.log('ERROR: loginUser_function', e);
      General.showToast(e.message, 'error');
    }
  };
}

/**
 * export all needed from userSlice.
 *
 * 'selector' allows us to select a specific bit from store state,
 * * in this case we get a user state from store.
 */
export const userSelector = (state: { userStore: UserState }) => state.userStore;
export default userSlice.reducer;
export { reset };

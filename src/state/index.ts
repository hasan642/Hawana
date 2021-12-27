/**
 * state/index.ts
 * developed by Hasan Alawneh.
 * A file that contains a redux creation and namespacing.
 * created at: 27/12/2021
 */

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userReducer from './slices/user';

/**
 * create a store.
 */
const reduxStore = configureStore({
  reducer: {
    /**
     * all resucers should be called here.
     */
    userStore: userReducer,
  },
  middleware: defaultMiddleware =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});
export const useReduxDispatch = useDispatch;

export default reduxStore;
export * from './slices';
export * from './state.types';

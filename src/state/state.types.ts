/**
 * state.types.ts
 * developed by Hasan Alawneh.
 * A file that contains a state types.
 * created at: 27/12/2021
 */

import { ApiTypes } from 'api';

export interface UserState {
  user: ApiTypes.User;
  loading: boolean;
}

/**
 * api.types.ts
 * developed by Hasan Alawneh.
 * A file that contains an api types.
 * created at: 22/12/2021
 */

// common.
export enum ResponseKind {
  ok = 'OK',
  reject = 'REJECT',
}
interface SuccessCommon {
  kind: ResponseKind.ok;
}
interface ErrorCommon {
  kind: ResponseKind.reject;
  error: string;
}

// signup
export interface SignupPayload {
  phoneNumber: string;
  password: string;
}
interface ISignup extends SuccessCommon {}
export type ISignupResponse = Promise<ISignup | ErrorCommon>;

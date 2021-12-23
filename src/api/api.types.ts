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

// signup api.
export interface SignupPayload {
  phone_number: string;
  password: string;
}
export type ISignupResponse = Promise<SuccessCommon | ErrorCommon>;

// login api.
export interface LoginPayload {
  phone_number: string;
  password: string;
  fcm_token: string;
  last_platform_login: string;
}
export type ILoginResponse = Promise<SuccessCommon | ErrorCommon>;

// scheduleNotification api.
export interface ScheduleNotificationPayload {
  phone_number: string;
  title: string;
  body: string;
}
export type IScheduleNotificationResponse = Promise<SuccessCommon | ErrorCommon>;

/**
 * navigation/types.ts
 * developed by Hasan Alawneh.
 * A types for navigation.
 * created at: 29/07/2021
 */

// screens interfaces.
interface IScheduleNotificationScreen {
  userId: string;
}

// all screen props here.
export type AllStackNavParams = {
  // stacks.
  AuthStack: any;
  AppStack: any;

  // screens.
  SplashScreen: any;
  LoginScreen: any;
  SignupScreen: any;
  HomeScreen: any;
  UsersScreen: any;
  ScheduleNotificationScreen: IScheduleNotificationScreen;
  ProfileScreen: any;
};

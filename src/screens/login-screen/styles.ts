/**
 * styles.ts
 * developed by Hasan Alawneh.
 * A file that shows a login screen styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLOR.light },
  wlc: {
    color: COLOR.dark,
    fontWeight: 'bold',
    fontSize: 16,
  },
  enterData: {
    color: COLOR.dark,
    fontSize: 14,
    marginTop: 4,
  },
  internalContainer: { paddingHorizontal: 32, marginTop: 32 },
  inputsHolder: {
    marginTop: 16,
  },
  signUpContainer: {
    marginTop: 8,
  },
  signupTxt: {
    textAlign: 'center',
  },
});

export default styles;

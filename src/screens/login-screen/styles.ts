/**
 * styles.ts
 * developed by Hasan Alawneh.
 * A file that shows a login screen styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import { COLOR, LAYOUT } from 'theme';

// cconstants.
const imgSize = LAYOUT.window.width / 4;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLOR.light },
  wlc: {
    color: COLOR.dark,
    fontWeight: 'bold',
    fontSize: 24,
  },
  enterData: {
    color: COLOR.dark,
    fontSize: 16,
    marginTop: 4,
  },
  internalContainer: { paddingHorizontal: 32, marginTop: 64 },
  inputsHolder: {
    marginTop: 16,
  },
  signUpContainer: {
    marginTop: 8,
  },
  signupTxt: {
    textAlign: 'center',
  },
  userIcon: {
    alignSelf: 'center',
    fontSize: 100,
    color: COLOR.primary,
  },
});

export default styles;

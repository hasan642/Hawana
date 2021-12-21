/**
 * styles.ts
 * developed by Hasan Alawneh.
 * A file that shows a signup screen styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.light,
  },
  userIcon: {
    alignSelf: 'center',
    fontSize: 100,
    color: COLOR.primary,
  },
  internalContainer: { paddingHorizontal: 32, marginTop: 64 },
  inputsHolder: {
    marginTop: 16,
  },
});

export default styles;

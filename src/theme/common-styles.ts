/**
 * theme/common-styles.ts
 * developed by Hasan Alawneh.
 * A ccommon styles that used by the app.
 * created at: 19/02/2021
 */

import { StyleSheet } from 'react-native';
import { COLOR } from '.';

const styles = StyleSheet.create({
  // margins
  marginT16: { marginTop: 16 },
  marginT32: { marginTop: 32 },
  marginT40: { marginTop: 40 },
  // colors
  transparentBG: { backgroundColor: COLOR.transparent },
  // layout.
  noWidth: { width: undefined },
});

export default styles;

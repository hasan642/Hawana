/**
 * theme/common-styles.ts
 * developed by Hasan Alawneh.
 * A ccommon styles that used by the app.
 * created at: 19/02/2021
 */

import { Platform, StyleSheet } from 'react-native';
import { COLOR } from '.';

const styles = StyleSheet.create({
  // margins
  marginT16: { marginTop: 16 },
  marginT32: { marginTop: 32 },
  marginT40: { marginTop: 40 },
  marginT60: { marginTop: 60 },
  // colors
  transparentBG: { backgroundColor: COLOR.transparent },
  // layout.
  noWidth: { width: undefined },
  alignSelfCenter: { alignSelf: 'center' },
});

// Gets cross elevation.
export function getCrossElevation() {
  return {
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: '#D7DEF0',
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
      },
    }),
  };
}

export default styles;

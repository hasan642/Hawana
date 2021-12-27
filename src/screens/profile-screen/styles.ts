/**
 * styles.ts
 * developed by Hasan Alawneh.
 * A file that shows a profile screen styles.
 * created at: 27/12/2020
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.light,
  },
  scrollView: {
    width: '90%',
    alignSelf: 'center',
  },
});

// export as default.
export default styles;

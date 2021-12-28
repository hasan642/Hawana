/**
 * styles.ts
 * developed by Hasan Alawneh.
 * A file that shows a users screen styles.
 * created at: 24/12/2020
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

const userImgSize = 24;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.light,
  },
  userImg: {
    height: userImgSize,
    width: userImgSize,
  },
});

// export as default.
export default styles;

/**
 * styles.ts
 * developed by Hasan Alawneh.
 * A file that shows a notification scheduler screen styles.
 * created at: 24/12/2021
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.light,
    flex: 1,
  },
  internalContainer: {
    marginHorizontal: 16,
  },
  textArea: { borderRadius: 16, marginTop: 16 },
});

// export as default.
export default styles;

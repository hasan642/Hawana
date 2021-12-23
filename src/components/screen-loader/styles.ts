/**
 * styles.tsx
 * developed by Hasan Alawneh.
 * A file that contains a scren loader styles.
 * created at: 22/12/2021
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.transparent1,
  },
  internalContainer: { backgroundColor: COLOR.light, borderRadius: 4, padding: 16 },
  activityIndicator: { padding: 16 },
});

// export as default.
export default styles;

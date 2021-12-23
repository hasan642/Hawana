/**
 * screeb-loader.tsx
 * developed by Hasan Alawneh.
 * A file that contains a scren loader app.
 * created at: 22/12/2021
 */

import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { COLOR } from 'theme';
import styles from './styles';

/**
 * A function component that shows a screen loader.
 */
function ScreenLoader() {
  return (
    <View style={styles.container}>
      <View style={styles.internalContainer}>
        <ActivityIndicator {...({} as any)} size={'small'} color={COLOR.primary} />
      </View>
    </View>
  );
}

// export as default.
export default ScreenLoader;

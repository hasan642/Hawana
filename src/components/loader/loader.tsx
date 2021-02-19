/**
 * loader.tsx
 * developed by Hasan Alawneh.
 * A file that contains a loader component.
 * created at: 19/02/2021
 */

import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styles from './styles';

/**
 * A function component that shows a full loader screen.
 */
function Loader() {

    // use the paper theme.
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <ActivityIndicator
                color={colors.primary}
                size={'large'}

                // this to remove react-native-paper warning.
                {...{} as any}

            />
        </View>
    );
};

// export as default.
export default Loader;
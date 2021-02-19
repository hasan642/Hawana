/**
 * loader/styles.ts
 * developed by Hasan Alawneh.
 * A file that contains a loader's styles component.
 * created at: 19/02/2021
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: COLOR.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

// export as default.
export default styles;
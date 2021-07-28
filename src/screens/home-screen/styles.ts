/**
 * SplashScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a SplashScreen styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

/**
 * A styles for SplashScreen.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.primary
    },
    liHolder: {
        borderWidth: 1
    },
    liQuote: {
        fontSize: 16,
        color: COLOR.dark,
        textAlign: 'center'
    },
    liTime: {
        color: COLOR.dark,
        fontSize: 14
    }
});

/**
 * export as default.
 */
export default styles;
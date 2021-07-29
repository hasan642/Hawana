/**
 * SplashScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a SplashScreen styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

// constants.
const borderRadius = 16;

/**
 * A styles for SplashScreen.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.primary
    },
    liHolder: {
        padding: 16,
        borderTopRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        borderTopLeftRadius: 4,
        borderBottomRightRadius: 4,
        marginBottom: 16,
        marginHorizontal: 24
    },
    liQuote: {
        fontSize: 40,
        color: COLOR.dark,
        textAlign: 'left',
    },
    liTime: {
        color: COLOR.dark,
        fontSize: 20,
        marginTop: 16,
        textAlign: 'left',
    },
    menuIcon: {
        height: 32,
        width: 32,
        marginLeft: 16
    },
});

/**
 * export as default.
 */
export default styles;
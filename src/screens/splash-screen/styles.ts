/**
 * SplashScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a SplashScreen styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';

/**
 * A styles for SplashScreen.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quotesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    quoteImg: {
        height: 32,
        width: 32,
        marginHorizontal: 4
    },
    msg: {
        fontSize: 40,
        marginTop: 32,
        textAlign: 'center',
    },
    appName: {
        fontSize: 24
    }
});

/**
 * export as default.
 */
export default styles;
/**
 * SplashScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a SplashScreen component.
 * created at: 21/12/2020
 */

import React from 'react';
import { View } from 'react-native';
import styles from './styles';

/**
 * type checking
 */
interface SplashScreenProps {

};

/**
 * A function component that shows a SplashScreen.
 */
function SplashScreen(props: SplashScreenProps) {
    return (<View style={styles.container}>

    </View>);
};

/**
 * export as default.
 */
export default SplashScreen;
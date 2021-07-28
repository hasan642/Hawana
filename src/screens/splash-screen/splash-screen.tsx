/**
 * SplashScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a SplashScreen component.
 * created at: 21/12/2020
 */

import React, { useLayoutEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
    TouchableOpacity,
    Image,
    View
} from 'react-native';
import styles from './styles';
import { Text } from 'components';
import { useTheme } from 'react-native-paper';
import { AllStackNavParams } from 'navigation/types';
import { APP_NAME } from 'config';

/**
 * type checking
 */
interface SplashScreenProps {
    navigation: StackNavigationProp<AllStackNavParams, 'SplashScreen'>;
};

/**
 * A function component that shows a SplashScreen.
 */
function SplashScreen({
    navigation
}: SplashScreenProps) {

    // use paper theme.
    const { colors: themeColors } = useTheme();

    /**
     * Handles left header press.
     */
    const handleLeftHeaderPress = () => {
        // navigation.n
    };

    // set layout effect.
    useLayoutEffect(
        () => {
            navigation.setOptions({
                headerLeft: () => (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={handleLeftHeaderPress}
                    >
                        <Image
                            source={require('assets/list.png')}
                            style={styles.menuIcon}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                )
            })
        },
        []
    );

    return (
        <View style={[
            styles.container,
            { backgroundColor: themeColors.primary }
        ]}>
            <View style={styles.quotesContainer}>
                <Image
                    source={require('assets/left-quote.png')}
                    style={styles.quoteImg}
                    resizeMode='contain'
                />

                <Text style={styles.appName}>
                    {` ${APP_NAME} `}
                </Text>

                <Image
                    source={require('assets/right-quote.png')}
                    style={styles.quoteImg}
                    resizeMode='contain'
                />
            </View>

            <Text style={styles.msg}>
                {'“ write your quotes ”'}
            </Text>
        </View>
    );
};

/**
 * export as default.
 */
export default SplashScreen;
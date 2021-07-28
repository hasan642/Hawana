/**
 * home-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a home screen component.
 * created at: 29/07/2021
 */

import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { AllStackNavParams } from 'navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import { Text } from 'components';

/**
 * type checking.
 */
interface HomeScreenProps {
    navigation: StackNavigationProp<AllStackNavParams, 'HomeScreen'>;
};

/**
 * A function component that shows a home screen.
 */
function HomeScreen({ navigation }: HomeScreenProps) {

    // navigate to home screen after some seconds.
    useEffect(() => {
        navigation.navigate('HomeScreen');
    }, []);

    /**
     * Renderes quote item.
     */
    const renderQuoteItem = ({ item }: { item: any }) => {
        return (
            <View style={styles.liHolder}>
                <Text style={styles.liQuote}>
                    {`"${item.text}"`}
                </Text>

                <Text style={styles.liTime}>
                    {item.time}
                </Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={QUOTES}
                renderItem={renderQuoteItem}
            />
        </View>
    );
};

// constants.
const QUOTES = [{
    text: 'd;/llckl;dsjfl;s',
    time: '01:01',
}, {
    text: 'd;/llckl;dsjfl;s',
    time: '02:02',
}, {
    text: 'd;/llckl;dsjfl;s',
    time: '03:03',
}, {
    text: 'd;/llckl;dsjfl;s',
    time: '04:04',
}, {
    text: 'd;/llckl;dsjfl;s',
    time: '05:05',
}, {
    text: 'd;/llckl;dsjfl;s',
    time: '06:06',
}, {
    text: 'd;/llckl;dsjfl;s',
    time: '07:07',
}, {
    text: 'd;/llckl;dsjfl;s',
    time: '08:08',
},
{
    text: 'd;/llckl;dsjfl;s',
    time: '09:09',
    id: '8'
}, {
    text: 'd;/llckl;dsjfl;s',
    time: '10:10',
}, {
    text: 'd;/llckl;dsjfl;s',
    time: '11:11',
},
{
    text: 'd;/llckl;dsjfl;s',
    time: '12:12',
}];

/**
 * export as default.
 */
export default HomeScreen;
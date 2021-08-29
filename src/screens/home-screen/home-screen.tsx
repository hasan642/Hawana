/**
 * home-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a home screen component.
 * created at: 29/07/2021
 */

import React, {useEffect, useLayoutEffect} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {AllStackNavParams} from 'navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import styles from './styles';
import {Text} from 'components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR} from 'theme';
import {changeLanguage} from 'i18n';
import {APP_NAME, QUOTES} from 'config';

/**
 * type checking.
 */
interface HomeScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'HomeScreen'>;
}

/**
 * A function component that shows a home screen.
 */
function HomeScreen({navigation}: HomeScreenProps) {
  // navigate to home screen after some seconds.
  useEffect(() => {
    navigation.navigate('HomeScreen');
  }, []);

  // set layout effect.
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLOR.primary,
        borderBottomWidth: 0,
        borderBottomColor: COLOR.primary,
        elevation: 0,
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      headerLeft: () => null,
      // headerLeft: () => (
      //   <TouchableOpacity activeOpacity={1} onPress={handleLeftHeaderPress}>
      //     <Image
      //       source={require('assets/language.png')}
      //       style={styles.menuIcon}
      //       resizeMode="contain"
      //     />
      //   </TouchableOpacity>
      // ),
    });
  }, []);

  /**
   * Handles left header press.
   */
  const handleLeftHeaderPress = () => {
    changeLanguage('ar');
  };

  /**
   * Renderes quote item.
   */
  const renderQuoteItem = ({item}: {item: any}) => {
    return (
      <View style={[styles.liHolder, {backgroundColor: COLOR.light}]}>
        <Text style={styles.liQuote}>{`“ ${item.text} ”`}</Text>
        <Text style={styles.liTime}>{item.time}</Text>
      </View>
    );
  };

  /**
   * Extractes key for list.
   */
  const getKeyExtractor = (it: any) => it.time;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={QUOTES}
        renderItem={renderQuoteItem}
        keyExtractor={getKeyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

/**
 * export as default.
 */
export default HomeScreen;

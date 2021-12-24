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
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from 'theme';
import { QUOTES } from 'config';
import { FAB } from 'react-native-paper';

/**
 * type checking.
 */
interface HomeScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'HomeScreen'>;
}

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
      <View style={[styles.liHolder, { backgroundColor: COLOR.light }]}>
        <Text style={styles.liQuote}>{`“ ${item.text} ”`}</Text>
        <Text style={styles.liTime}>{item.time}</Text>
      </View>
    );
  };

  /**
   * Extractes key for list.
   */
  const getKeyExtractor = (it: any) => it.time;

  /**
   * Handles fab press.
   */
  const handleFabPress = () => {
    navigation.navigate('ScheduleNotificationScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={QUOTES}
        renderItem={renderQuoteItem}
        keyExtractor={getKeyExtractor}
        showsVerticalScrollIndicator={false}
      />

      <FAB style={styles.fab} small icon='send' onPress={handleFabPress} />
    </SafeAreaView>
  );
}

/**
 * export as default.
 */
export default HomeScreen;

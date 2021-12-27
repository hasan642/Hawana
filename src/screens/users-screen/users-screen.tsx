/**
 * users-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a users screen.
 * created at: 24/12/2020
 */

import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AllStackNavParams } from 'navigation';
import styles from './styles';
import { Header } from 'components';
import { translate } from 'i18n';
import { List } from 'react-native-paper';

// type checking.
interface UsersScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'UsersScreen'>;
}

/**
 * A function component that shows a users screen.
 */
function UsersScreen({ navigation }: UsersScreenProps) {
  // Fetch the users from the backend side.
  useEffect(() => {}, []);

  /**
   * Extractes key for list.
   */
  const getKeyExtractor = (item: any, index: number) => String(index);

  /**
   * Renderes participant item.
   */
  const renderParticipant = ({ item }) => {
    /**
     * Handles select item.
     */
    const handleSelectItem = () => {
      navigation.navigate('ScheduleNotificationScreen');
    };

    return (
      <List.Item
        onPress={handleSelectItem}
        title='Hasan'
        left={props => <List.Icon {...props} icon='account' />}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header handleGoBack={navigation.goBack} title={translate('usersScreen.selectUser')} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={getKeyExtractor}
        renderItem={renderParticipant}
      />
    </View>
  );
}

// export as default.
export default UsersScreen;

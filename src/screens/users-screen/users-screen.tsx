/**
 * users-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a users screen.
 * created at: 24/12/2020
 */

import React, { useEffect, useState } from 'react';
import { FlatList, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AllStackNavParams } from 'navigation';
import styles from './styles';
import { Header, ScreenLoader } from 'components';
import { translate } from 'i18n';
import { List } from 'react-native-paper';
import { getAllUsers } from 'api/api';
import { ApiTypes } from 'api';

// type checking.
interface UsersScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'UsersScreen'>;
}

/**
 * A function component that shows a users screen.
 */
function UsersScreen({ navigation }: UsersScreenProps) {
  // state.
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<any[]>([]);

  // Fetch the users from the backend side.
  useEffect(() => {
    // turn on loader.
    setIsLoading(true);

    // get all users.
    getAllUsers().then(r => {
      if (r.kind === ApiTypes.ResponseKind.ok) {
        setUsers(r.users);
      }
      setIsLoading(false);
    });
  }, []);

  /**
   * Extractes key for list.
   */
  const getKeyExtractor = (item: any, index: number) => String(index);

  /**
   * Renderes participant item.
   */
  const renderParticipant = ({ item }: { item: ApiTypes.User }) => {
    /**
     * Handles select item.
     */
    const handleSelectItem = () => {
      navigation.navigate('ScheduleNotificationScreen');
    };

    return (
      <List.Item
        onPress={handleSelectItem}
        title={item.name}
        left={props => (
          <List.Icon
            {...props}
            icon={p => (
              <Image
                source={{ uri: item.profilePic }}
                resizeMode='contain'
                style={styles.userImg}
              />
            )}
          />
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header handleGoBack={navigation.goBack} title={translate('usersScreen.selectUser')} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        keyExtractor={getKeyExtractor}
        renderItem={renderParticipant}
      />

      {isLoading && <ScreenLoader />}
    </View>
  );
}

// export as default.
export default UsersScreen;

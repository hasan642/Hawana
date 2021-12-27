/**
 * profile-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a profile screen.
 * created at: 27/12/2021
 */

import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useReduxDispatch, userSelector } from 'state';
import styles from './styles';
import { Avatar, List } from 'react-native-paper';
import { COLOR, commonStyles, LAYOUT } from 'theme';
import { AllStackNavParams } from 'navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { Header } from 'components';
import { translate } from 'i18n';
import { reset } from 'state';
import { StorageHelper } from 'helperes';

// type checking.
interface ProfileScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'ProfileScreen'>;
}

/**
 * A function component that shows a profile screen.
 */
function ProfileScreen({ navigation }: ProfileScreenProps) {
  // use redux state.
  const { user } = useSelector(userSelector);

  // use dispatch.
  const d = useReduxDispatch();

  /**
   * Handles logout.
   */
  const handleLogot = () => {
    StorageHelper.clear('@currentUser').then(_ => {
      d(reset());
      navigation.navigate('AuthStack');
    });
  };

  return (
    <View style={styles.container}>
      <Header backOnly handleGoBack={navigation.goBack} />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Avatar.Image
          {...({} as any)}
          size={LAYOUT.window.width / 3}
          source={{ uri: user.profilePic }}
          style={commonStyles.alignSelfCenter}
        />

        <View style={commonStyles.marginT32}>
          <List.Item
            onPress={handleLogot}
            title={translate('profileScreen.logout')}
            left={props => <List.Icon color={COLOR.danger} {...props} icon='logout' />}
          />
        </View>
      </ScrollView>
    </View>
  );
}

// export as default.
export default ProfileScreen;

/**
 * users-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a users screen.
 * created at: 24/12/2020
 */

import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AllStackNavParams } from 'navigation';
import styles from './styles';

// type checking.
interface UsersScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'UsersScreen'>;
}

/**
 * A function component that shows a users screen.
 */
function UsersScreen(p: UsersScreenProps) {
  return <View style={styles.container}></View>;
}

// export as default.
export default UsersScreen;

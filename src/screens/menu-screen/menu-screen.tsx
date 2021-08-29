/**
 * menu-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a menu screen.
 * created at: 22/08/2021
 */

import React from 'react';
import {View} from 'react-native';
import styles from './styles';

// type checking.
interface MenuScreenProps {}

/**
 * A function component that shows a menu screen.
 */
function MenuScreen(p: MenuScreenProps) {
  return <View style={styles.container}></View>;
}

// export as default.
export default MenuScreen;

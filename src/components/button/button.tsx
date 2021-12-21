/**
 * button.ts
 * developed by Hasan Alawneh.
 * A file that shows a button.
 * created at: 21/12/2021
 */

import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import styles, { theme } from './styles';

// type checking.
interface ButtonProps {
  title: string;
  handlePress: () => void;

  // optional props.
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

/**
 * A function component that shows button.
 */
function ButtonComponent({ title, handlePress, containerStyle, titleStyle }: ButtonProps) {
  return (
    <Button
      {...({} as any)}
      style={containerStyle}
      theme={theme}
      mode='contained'
      onPress={handlePress}
      labelStyle={[styles.defaultLabel, titleStyle]}
    >
      {title}
    </Button>
  );
}

export default ButtonComponent;

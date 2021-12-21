/**
 * text-field.tsx
 * developed by Hasan Alawneh.
 * A file that shows a texxt field component.
 * created at: 21/12/2021
 */

import React, { forwardRef } from 'react';
import { View, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-paper';
import { textFieldTheme } from './styles';

// type checking.
interface TextFieldProps {
  label: string;
  value: string;
  onChangeText: (val: string) => void;

  // optional props.
  containerStyle?: ViewStyle;
  secureTextEntry?: boolean;
  handleSubmitEditing?: () => void;
  rightIconName?: string;
  handleRightIconPress?: () => void;
}

/**
 * A function component that shows a texxt field.
 */
function TextField(
  {
    label,
    value,
    onChangeText,
    secureTextEntry,
    containerStyle,
    handleSubmitEditing,
    rightIconName,
    handleRightIconPress,
  }: TextFieldProps,
  ref: any
) {
  return (
    <View style={containerStyle}>
      <TextInput
        {...({} as any)}
        secureTextEntry={secureTextEntry}
        label={label}
        value={value}
        onChangeText={onChangeText}
        theme={textFieldTheme}
        onSubmitEditing={handleSubmitEditing}
        ref={ref}
        right={
          rightIconName && <TextInput.Icon onPress={handleRightIconPress} name={rightIconName} />
        }
      />
    </View>
  );
}

// export as default.
export default forwardRef(TextField);

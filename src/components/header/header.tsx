/**
 * header.tsx
 * developed by Hasan Alawneh.
 * A file that shows a header component.
 * created at: 21/12/2021
 */

import React from 'react';
import { Appbar } from 'react-native-paper';
import { COLOR, commonStyles } from 'theme';

// type checking.
interface HeaderProps {
  handleGoBack: () => void;

  // optional props.
  backOnly?: boolean;
  title?: string;
}

/**
 * A function component that shows a header.
 */
function Header({ handleGoBack, title, backOnly = false }: HeaderProps) {
  return (
    <Appbar.Header style={backOnly && commonStyles.transparentBG}>
      <Appbar.BackAction color={backOnly ? COLOR.dark : COLOR.light} onPress={handleGoBack} />
      {!backOnly && Boolean(title) && <Appbar.Content title={title} />}
    </Appbar.Header>
  );
}

// export as default.
export default Header;

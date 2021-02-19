/**
 * text/text.tsx
 * developed by Hasan Alawneh.
 * A file that contains a text for app.
 * created at: 19/02/2021
 */

import React from 'react';
import {
    Text as RnTxt,
    TextStyle
} from 'react-native';
import { useTheme } from 'react-native-paper';

// type checking.
interface TextProps {
    children: string;
    style?: TextStyle;
};

/**
 * A function component that shows a text.
 */
function Text({
    children,
    style: overrideTextStyle
}: TextProps) {

    // use the paper theme.
    const { colors } = useTheme();

    return (
        <RnTxt style={
            [
                { color: colors.text },
                overrideTextStyle,
            ]
        }>
            {children}
        </RnTxt>
    );
};

// export as default.
export default Text;
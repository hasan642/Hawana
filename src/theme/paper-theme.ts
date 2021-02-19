/**
 * theme/paper-theme.ts
 * developed by Hasan Alawneh.
 * A theme for react-native-paper.
 * created at: 19/02/2021
 */

import {
    DefaultTheme,
    DarkTheme
} from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import { COLOR } from '.';

// the light theme.
const lightTheme: Theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: COLOR.primary,
        text: COLOR.dark,
    },
};
;
// the dark theme.
const darkTheme: Theme = {
    ...DarkTheme,
    roundness: 2,
    colors: {
        ...DarkTheme.colors,
        primary: COLOR.dark,
        text: COLOR.light,
    },
};

// export all themes.
export default {
    LIGHT: lightTheme,
    DARK: darkTheme
};
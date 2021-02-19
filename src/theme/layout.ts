/**
 * theme/layout.ts
 * developed by Hasan Alawneh.
 * A useful layout contants in the app.
 * created at: 19/02/2021
 */

import { Dimensions } from "react-native";

// the window dimensions.
const {
    width: windowWidth,
    height: windowHeight
} = Dimensions.get('window');

// export as default.
export default {
    window: {
        width: windowWidth,
        height: windowHeight
    },
};
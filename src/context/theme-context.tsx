/**
 * context/theme-context.tsx
 * developed by Hasan Alawneh.
 * A file that contains a text styles.
 * created at: 19/02/2021
 */

import React, {
    createContext,
    useState,
    Context
} from 'react';

// type checking.
interface ThemeContextProviderProps {
    children: any;
};
type SelectedTheme = 'DARK' | 'LIGHT';

// type checking.
export interface IThemeContextProvider {
    selectedTheme: SelectedTheme;
    setSelectedTheme: (selectedTheme: SelectedTheme) => void;
};

// create the context
export const ThemeContext = createContext({
    selectedTheme: 'LIGHT',
    setSelectedTheme: (theme: SelectedTheme) => { }
});

/**
 * A function component that shows a theme context provider.
 */
const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {

    // state.
    const [selectedTheme, setSelectedTheme] = useState<SelectedTheme>('LIGHT');

    return (
        <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// export as default.
export default ThemeContextProvider;
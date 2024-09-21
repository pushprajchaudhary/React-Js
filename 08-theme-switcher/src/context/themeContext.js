import {createContext, useContext} from 'react'

export const ThemeContext = createContext({
    themeMode: 'dark',
    darkTheme: () => {},
    lightTheme: () => {}
});

export const ThemeContextProvider = ThemeContext.Provider;

export const useThemeContext = () => {
    return useContext(ThemeContext);
}
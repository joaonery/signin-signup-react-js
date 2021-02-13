import React, { createContext, useCallback, useEffect, useState } from 'react';

interface IThemeContextData {
    toggleDarkMode: (value?: boolean) => void;
    isDark: boolean
}
export const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
    const [isDark, setIsDark] = useState(localStorage.getItem('dark-mode') === 'true');

    useEffect(() => {
        if (isDark) {
            document.documentElement.style.setProperty('--color-background-paper', '#242526');
            document.documentElement.style.setProperty('--color-background', '#18191A');
            document.documentElement.style.setProperty('--color-border', '#232426');
            document.documentElement.style.setProperty('--color-text', '#e4e6eb');
        } else {
            document.documentElement.style.setProperty('--color-background-paper', '##fafafa');
            document.documentElement.style.setProperty('--color-background', '#f0f2f5');
            document.documentElement.style.setProperty('--color-border', '#afafaf');
            document.documentElement.style.setProperty('--color-text', '#242526');
        }

        localStorage.setItem('dark-mode', String(isDark));
    }, [isDark]);

    const toggleDarkMode = useCallback((value?: boolean | undefined) => {
        if (!value) {
            setIsDark(!isDark);
        } else {
            setIsDark(value);
        }
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
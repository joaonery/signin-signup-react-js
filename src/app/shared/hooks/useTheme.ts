import { useContext } from 'react';
import { Context } from 'vm';
import { ThemeContext } from '../contexts/Theme';

export const useTheme = () => {
    const context = useContext(ThemeContext);

    return {
        isDark: context.isDark,
        toggleDarkMode: context.toggleDarkMode
    };
}
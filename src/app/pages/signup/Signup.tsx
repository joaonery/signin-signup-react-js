import React from 'react';
import { useTheme } from '../../shared/hooks/useTheme';

export const Signup: React.FC = () => {
    const {isDark, toggleDarkMode} = useTheme();
    
    return (
        <div>
            Signup
        </div>
    );
}

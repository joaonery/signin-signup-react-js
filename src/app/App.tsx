import React from 'react';

import { Routes } from './routes/Routes';
import { ThemeProvider } from './shared/contexts/Theme';
import './styles/global.css';

export const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

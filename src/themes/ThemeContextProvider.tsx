// src/ThemeContext.tsx
import React, { createContext, useState, useMemo, useContext, ReactNode } from 'react';
import { Theme, ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { ThemeMode, THEMES_MODE } from '../constant';

interface ThemeContextProps {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useCustomTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(THEMES_MODE.LIGHT);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === THEMES_MODE.LIGHT ? THEMES_MODE.DARK : THEMES_MODE.LIGHT));
  };

  const themeMode = useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme]
  );

  const appliedTheme = useMemo<Theme>(
    () => (theme === 'light' ? lightTheme : darkTheme),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeMode}>
      <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

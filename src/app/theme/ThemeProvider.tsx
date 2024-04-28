import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from './type';
import * as styles from './ThemeProvider.module.scss';

type ThemeContextProps = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextProps>({});

export const useThemeContext = (): ThemeContextProps => useContext(ThemeContext);

const getTheme = (): Theme => {
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if (Object.values<string>(Theme).includes(theme)) return theme as Theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) return Theme.light;

  return Theme.dark;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);
  console.log('@@@', theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={styles}>{children}</div>
    </ThemeContext.Provider>
  );
};

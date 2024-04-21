import React, { createContext, useContext } from 'react';
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

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: Theme.light }}>
      <div className={styles}>{children}</div>
    </ThemeContext.Provider>
  );
};

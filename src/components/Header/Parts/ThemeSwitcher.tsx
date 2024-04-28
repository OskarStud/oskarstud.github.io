import React from 'react';
import { useThemeContext } from '../../../app/theme/ThemeProvider';
import { Theme } from '../../../app/theme/type';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useThemeContext();
  const onChange = () => {
    if (theme === Theme.light) setTheme(Theme.dark);
    if (theme === Theme.dark) setTheme(Theme.light);
  };
  return (
    <label htmlFor="toggler">
      {theme}
      <input id="toggler" type="checkbox" onClick={onChange} />
    </label>
  );
};

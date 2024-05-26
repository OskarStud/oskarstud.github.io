import React from 'react';
import * as styles from './Header.module.scss';
import { Logo } from '../Logo';
import { ThemeSwitcher } from './Parts/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from './Parts/LangSwitcher/LangSwitcher';

export const Header: React.FC = (): React.ReactElement => {
  return (
    <div className={styles.header}>
      <Logo />
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
};

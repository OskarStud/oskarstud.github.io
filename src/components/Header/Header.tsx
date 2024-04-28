import React from 'react';
import * as styles from './Header.module.scss';
import { Logo } from '../Logo';
import { ThemeSwitcher } from './Parts/ThemeSwitcher';

export const Header: React.FC = (): React.ReactElement => {
  return (
    <div className={styles.header}>
      <Logo />
      <ThemeSwitcher />
    </div>
  );
};

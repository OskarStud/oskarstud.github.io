import React from 'react';
import * as styles from './Logo.module.scss';
import { useTranslation } from 'react-i18next';

export const Logo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.logo}>
      {t(`components.logo.text`)}
      <div className={styles.logoVector} />
    </div>
  );
};

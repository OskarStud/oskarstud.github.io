import React from 'react';
import * as styles from './SimpleButton.module.scss';
import { useTranslation } from 'react-i18next';

interface SimpleButtonProps extends React.ComponentProps<'button'> {
  text?: string;
}

export const SimpleButton: React.FC<SimpleButtonProps> = ({ text = 'Simple Button', ...props }) => {
  const { t } = useTranslation();
  return (
    <button className={styles.simpleButton} {...props}>
      {t(`components.SimpleButton.text`)}
    </button>
  );
};

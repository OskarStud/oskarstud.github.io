import React from 'react';
import * as styles from './ButtonIntoCart.module.scss';
import { useTranslation } from 'react-i18next';

type ButtonIntoCartProps = {
  count?: number;
  disabled?: boolean;
};

export const ButtonIntoCart: React.FC<ButtonIntoCartProps> = ({ count = 0, disabled = false }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.disabled ? `disabled` : ``}>
      {count == 0 ? (
        <div className={[styles.buttonIntoCart, styles.buy].join(' ')}>
          <span>{t(`components.ButtonIntoCart.text`)}</span>
        </div>
      ) : (
        <div className={[styles.buttonIntoCart, styles.count].join(' ')}>
          <span>
            {t(`components.ButtonIntoCart.count`)} <button>+</button> {count} <button>-</button>
          </span>
        </div>
      )}
    </div>
  );
};

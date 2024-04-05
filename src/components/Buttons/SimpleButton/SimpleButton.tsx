import React from 'react';
import * as styles from './SimpleButton.module.scss';

interface SimpleButtonProps extends React.ComponentProps<'button'> {
  text?: string;
}

export const SimpleButton: React.FC<SimpleButtonProps> = ({ text = 'Simple Button', ...props }) => {
  return (
    <button className={styles.simpleButton} {...props}>
      {text}
    </button>
  );
};

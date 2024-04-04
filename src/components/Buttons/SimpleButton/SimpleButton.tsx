import React from 'react';
import * as styles from './SimpleButton.module.scss';

type SimpleButtonProps = {
  text?: string;
};
export const SimpleButton: React.FC<SimpleButtonProps> = ({ text = 'Simple Button' }) => {
  return <button className={styles.simpleButton}>{text}</button>;
};

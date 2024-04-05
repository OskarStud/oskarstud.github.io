import React from 'react';
import * as styles from './InputField.module.scss';

type InputField = React.ComponentProps<'input'>;
export const InputField: React.FC<InputField> = ({ ...props }) => {
  return (
    <>
      <input className={styles.inputField} {...props} />
    </>
  );
};

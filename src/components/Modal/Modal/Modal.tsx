import React, { useContext } from 'react';
import * as styles from './Modal.module.scss';
import { ModalContext } from '../ControlModal/ControlModal';

type ModalProps = {
  visible?: boolean;
  children?: JSX.Element;
  text?: string;
};

export const Modal: React.FC<ModalProps> = ({ visible = false, text = 'Hello' }) => {
  text = useContext(ModalContext);
  return <div className={styles.modal}>{text}</div>;
};

import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import * as styles from './Modal.module.scss';
import { ModalContext } from '../../widgets/ControlModal/ControlModal';

type ModalProps = {
  visible?: boolean;
  children?: JSX.Element;
  text?: string;
  showModal?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  container?: HTMLElement;
};

export const Modal: React.FC<ModalProps> = ({
  container = document.body,
  visible = false,
  text,
  setShowModal,
  showModal,
}) => {
  if (!useContext(ModalContext)) {
    text = 'Hello';
  }
  return visible
    ? createPortal(
        <>
          <div className={styles.modal}>
            <button className={styles.button} onClick={() => setShowModal(!showModal)}>
              close
            </button>
            {text}
          </div>
        </>,
        container
      )
    : null;
};

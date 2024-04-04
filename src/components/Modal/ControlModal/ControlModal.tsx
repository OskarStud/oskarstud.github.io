import React, { createContext, useState } from 'react';
import { SimpleButton } from '../../Buttons';
import { Modal } from '../Modal/Modal';

export const ModalContext = createContext(null);
export const ControlModal: React.FC = () => {
  const [inputState, setInputState] = useState('');
  const changeHandler = (e: any) => {
    setInputState(e.target.value);
  };

  return (
    <ModalContext.Provider value={inputState}>
      <input placeholder="type here" value={inputState} onChange={changeHandler} onFocus={() => setInputState('')} />
      <SimpleButton text={'Open modal'} />
      <Modal />
    </ModalContext.Provider>
  );
};

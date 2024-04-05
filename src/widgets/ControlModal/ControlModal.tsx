import React, { createContext, useState } from 'react';
import { SimpleButton } from '../../components/Buttons';
import { Modal } from '../../components/Modal';
import { InputField } from '../../components/Inputs';

export const ModalContext = createContext(null);
export const ControlModal: React.FC = () => {
  const [inputState, setInputState] = useState('');
  const [showModal, setShowModal] = useState(false);
  const changeHandler = (e: any) => {
    setInputState(e.target.value);
  };

  const clickHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <ModalContext.Provider value={inputState}>
      <InputField
        placeholder="type here"
        value={inputState}
        onChange={changeHandler}
        onFocus={() => setInputState('')}
      />
      <SimpleButton text={'Open modal'} onClick={clickHandler} />
      <Modal visible={showModal} setShowModal={setShowModal} showModal={showModal} />
    </ModalContext.Provider>
  );
};

import React, { useState } from 'react';
import * as styles from './Effector.module.scss';
import { createPortal } from 'react-dom';

export const Effector = () => {
  const [elements, setElements] = useState<Array<React.ReactNode>>([]);

  const Ring = ({ id, color }: { id: string; color: string }) => (
    <div
      id={id}
      className={styles.ring}
      style={{ '--clr': color } as React.CSSProperties}
      onAnimationEnd={() => onAnimationEnd(id)}
    />
  );

  function clickHandler(args: { id: string; color: string }) {
    setElements((oldArr) => [...oldArr, <Ring key={args.id} {...args} />]);
  }

  const onAnimationEnd = (id: string) => {
    document.getElementById(id).remove();
  };

  return (
    <div className={styles.effectorContainer}>
      <div className={styles.buttons}>
        <button onClick={() => clickHandler({ id: Math.random().toString(16), color: 'orange' })}>
          Создать оранжевый эффект
        </button>
        <button onClick={() => clickHandler({ id: Math.random().toString(16), color: 'darkgreen' })}>
          Создать зеленый эффект
        </button>
        <button onClick={() => clickHandler({ id: Math.random().toString(16), color: 'yellow' })}>
          Создать желтый эффект
        </button>
      </div>
      <div className={styles.ringContainer} id="effectorContainer">
        {elements.length > 0 &&
          createPortal(
            elements.map((item) => item),
            document.getElementById('effectorContainer')
          )}
      </div>
    </div>
  );
};

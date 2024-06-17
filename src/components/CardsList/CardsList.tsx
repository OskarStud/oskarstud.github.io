import React, { useState } from 'react';
import { ItemCard, ItemCardProps } from '../ItemCard';
import * as styles from './CardsList.module.scss';
import { createRandomProduct } from '../../shared/lib/randoms';

type CardsListProps = {
  data?: Array<ItemCardProps>;
};

export const CardsList: React.FC<CardsListProps> = (dataList) => {
  const { data } = dataList;
  const [items, setItem] = useState(data);
  const clickHandler = () => {
    console.log(data);
    setItem([...items, createRandomProduct('17.06.2024')]);
  };

  return (
    <div className={styles.cardsListContainer}>
      {items.map((el) => (
        <ItemCard
          key={el.id}
          name={el.name}
          price={el.price}
          imgSrc={el.imgSrc}
          badge={el.badge}
          description={el.description}
        />
      ))}
      <button onClick={clickHandler}>Показать ещё</button>
    </div>
  );
};

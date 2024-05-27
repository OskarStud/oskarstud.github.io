import React from 'react';
import { ItemCard, ItemCardProps } from '../ItemCard';
import * as styles from './CardsList.module.scss';

type CardsListProps = {
  data?: Array<ItemCardProps>;
};

export const CardsList: React.FC<CardsListProps> = ({ data }) => {
  return (
    <div className={styles.cardsListContainer}>
      {data.map((el) => (
        <ItemCard key={el.imgSrc} price={el.price} imgSrc={el.imgSrc} label={el.label} description={el.description} />
      ))}
    </div>
  );
};

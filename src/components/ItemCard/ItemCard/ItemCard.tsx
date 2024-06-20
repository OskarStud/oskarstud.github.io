import React from 'react';
import * as styles from './ItemCard.module.scss';
import { Badge } from '../../Badge';
import { cutText } from '../../../shared/lib/helpers';

export type ItemCardProps = {
  id?: string;
  price?: string;
  description?: string;
  badge?: string;
  imgSrc?: string;
  name?: string;
};

export const ItemCard: React.FC<ItemCardProps> = ({
  price = '100 руб',
  description = 'Description',
  badge = 'Badge',
  name = 'Name',
  imgSrc = require('../../../img/mouseMainFull.png'),
}) => {
  return (
    <div className={styles.itemCard}>
      <img className={styles.image} src={imgSrc} />
      <div className={styles.content}>
        <div className={styles.badgeList}>
          <Badge text={badge} />
          {/*<Badge text="Best Seller" />*/}
        </div>
        <div className={styles.label}>{name}</div>
        <div className={styles.description}>{cutText(description)}</div>
        <div className={styles.price}>{price}.</div>
      </div>
    </div>
  );
};

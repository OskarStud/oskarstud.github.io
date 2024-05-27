import React from 'react';
import { Header } from '../Header';
import { Modal } from '../Modal';
import { ButtonIntoCart, SimpleButton } from '../Buttons';
import { ItemCard, ItemCardFull, ItemCardInCart } from '../ItemCard';
import { CardsList } from '../CardsList';
import itemCardsData from '../../shared/mock';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <ItemCard />
      <Modal />
      <ButtonIntoCart count={2} />
      <ButtonIntoCart count={0} />
      <SimpleButton />
      <ItemCardFull />
      <ItemCardInCart />
      <CardsList data={itemCardsData} />
    </>
  );
};

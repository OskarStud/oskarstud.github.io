import React from 'react';
import { Header } from '../Header';
import { ControlModal } from '../Modal';
import { ButtonIntoCart, SimpleButton } from '../Buttons';
import { ItemCard, ItemCardFull, ItemCardInCart } from '../ItemCard';
import { CardsList } from '../CardsList';
import itemCardsData from '../../shared/mock';
import { CroppedText } from '../CroppedText';

export const Layout: React.FC = () => {
  return (
    <>
      {/*<Header />*/}
      {/*<ItemCard />*/}
      {/*<ControlModal />*/}
      {/*<ButtonIntoCart count={2} />*/}
      {/*<ButtonIntoCart count={0} />*/}
      {/*<SimpleButton />*/}
      {/*<ItemCardFull />*/}
      {/*<ItemCardInCart />*/}
      {/*<CardsList data={itemCardsData} />*/}
      <CroppedText />
    </>
  );
};

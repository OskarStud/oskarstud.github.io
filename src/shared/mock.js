import { createRandomId } from './lib/randoms';

const itemCardsData = [
  {
    id: createRandomId(),
    price: '100',
    name: 'G100 Mouse',
    description: 'Товар номер один. Мышка чёрная.',
    badge: 'мышка',
    imgSrc: 'https://tfn.me/images/virtuemart/product/TFN-GM-MW-MX-11_012.jpg',
  },
  {
    id: createRandomId(),
    price: '300',
    name: 'KEY BLACK mice',
    description: 'Товар номер два. Мышка чёрная. Q series',
    badge: 'мышка',
    imgSrc: 'https://www.icover.ru/upload/resize_cache/iblock/c41/1300_700_1/c41c1273e1e8553ceb989c1849928c45.jpg',
  },
  {
    id: createRandomId(),
    price: '1000',
    name: 'Compit ClearView',
    description: 'Монитор высокоточный',
    badge: 'монитор',
    imgSrc:
      'https://www.depo.ru/upload/cimg_cache/1ffea6daa10d261da50ef269bae32581/jf5jnfaiz8ovrgp40jiti1mgl378u81g.jpg',
  },
  {
    id: createRandomId(),
    price: '100',
    name: 'Sony Ericsson Y510',
    description: 'Мобильный телефон старых веков',
    badge: 'Mobilephone',
    imgSrc: 'https://tfn.me/images/virtuemart/product/TFN-GM-MW-MX-11_012.jpg',
  },
  {
    id: createRandomId(),
    price: '300',
    name: 'Бриллиант',
    description: 'Сто карат',
    badge: 'мышка',
    imgSrc: 'https://www.icover.ru/upload/resize_cache/iblock/c41/1300_700_1/c41c1273e1e8553ceb989c1849928c45.jpg',
  },
  {
    id: createRandomId(),
    price: '1000',
    name: 'Driller x09',
    description: 'Дрель пробивная',
    badge: 'инструменты',
    imgSrc:
      'https://www.depo.ru/upload/cimg_cache/1ffea6daa10d261da50ef269bae32581/jf5jnfaiz8ovrgp40jiti1mgl378u81g.jpg',
  },
];

export default itemCardsData;

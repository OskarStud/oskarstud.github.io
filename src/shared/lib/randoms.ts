import { ItemCardProps } from '../../components/ItemCard';

type Category = {
  id: string;
  name: string;
  photo?: string;
};

interface Product extends ItemCardProps {
  id: string;
  name: string;
  imgSrc: string;
  createdAt: string;
  price: string;
  badge?: string;
  category?: Category;
  description?: string;
  oldPrice?: number;
}

const randomValue = {
  nameList: [
    'Fresh Bread',
    'Milk Butter',
    'Paracorde Knife',
    'Nokia 3110',
    'HP EliteBook 14',
    'AudioTechnica Model 1',
    'Watermelon baby',
  ],
  photoList: [
    'https://tfn.me/images/virtuemart/product/TFN-GM-MW-MX-11_012.jpg',
    'https://images.unsplash.com/photo-1701964619678-36b35865e238',
    'https://www.icover.ru/upload/resize_cache/iblock/c41/1300_700_1/c41c1273e1e8553ceb989c1849928c45.jpg',
    'https://www.depo.ru/upload/cimg_cache/1ffea6daa10d261da50ef269bae32581/jf5jnfaiz8ovrgp40jiti1mgl378u81g.jpg',
    'https://images.unsplash.com/photo-1616750819456-5cdee9b85d22?q=80&w=387&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555951015-6da899b5c2cd',
  ],
  price: ['1000', '900', '7000', '250', '400', '120', '10230'],
  oldPrice: ['999', '879', '6998', '249', '119', '399', '10229'],
  category: {
    nameList: ['Smartphone', 'Laptop', 'Knife', 'Vegetables', 'Headphones', 'Bread', 'Butter'],
    // photoList: ['smartphone/img1', 'laptop/img1', 'knife/img1', 'vegetables/img1', 'bread/img1'],
  },
  badgeList: ['Бестселлер', 'Уценка', 'Скидки', 'Сезон', 'Остатки'],
  desc: [
    'Товар номер один. Мышка чёрна',
    'Товар номер два. Мышка чёрная. Q series',
    'Монитор высокоточный',
    'Товар хлебный. Черный хлеб.',
    'Стакан граненный, прозрачный',
  ],
};

const pickRandomValue = (arr: Array<number> | Array<string>): number | string => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const createRandomId = (): string => {
  return `id_${Math.random().toString().slice(8)}`;
};

export const createRandomProduct = (createdAt: string): Product => {
  return {
    id: createRandomId(),
    name: pickRandomValue(randomValue.nameList) as string,
    imgSrc: pickRandomValue(randomValue.photoList) as string,
    createdAt: createdAt,
    price: pickRandomValue(randomValue.price) as string,
    badge: pickRandomValue(randomValue.badgeList) as string,
    category: {
      id: createRandomId(),
      name: pickRandomValue(randomValue.category.nameList) as string,
    },
    description: pickRandomValue(randomValue.desc) as string,
    oldPrice: pickRandomValue(randomValue.oldPrice) as number,
  };
};

import { IRestaurantProps } from '../Restaurant';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';

export const restaurant: IRestaurantProps = {
  id: 1,
  title: 'Ресторан "Дружба',
  description:
    'Ресторан "Дружба" - это место, где можно насладиться вкусной едой и приятной атмосферой. В меню ресторана представлены блюда русской и европейской кухни, а также различные напитки. Здесь вы можете провести романтический ужин, семейный обед или деловой обед с коллегами. Ресторан "Дружба" расположен в центре города, что делает его удобным для посещения.',
  address: ' Брест, ул. Моево-Поджарская, 2',
  cuisine: 'европейская',
  opening_time: '12:00',
  closing_time: '06:00',
  photos: [
    {
      src: img1,
      alt: 'фото ресторана'
    },
    {
      src: img2,
      alt: 'фото ресторана'
    },
    {
      src: img3,
      alt: 'фото ресторана'
    }
  ]
};

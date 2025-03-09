import { IRestaurantProps } from '../Restaurant';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import menu1 from './img/menu-1.jpg';
import menu2 from './img/menu-2.jpg';
import menu3 from './img/menu-3.jpg';
import flowers1 from './img/flowers-1.jpg';
import flowers2 from './img/flowers-2.jpg';
import flowers3 from './img/flowers-3.jpg';
import decor1 from './img/decor-1.jpg';
import decor2 from './img/decor-2.jpg';
import decor3 from './img/decor-3.jpg';

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
      alt: 'фото1 ресторана'
    },
    {
      src: img2,
      alt: 'фото2 ресторана'
    },
    {
      src: img3,
      alt: 'фото3 ресторана'
    }
  ],
  menu: [
    {
      id: 1,
      titleMenu: 'Комплекс №1 - Вечерние грезы',
      setMenu: [
        'Суп Легкий',
        'Стейк из телятины в соусе Бешамель',
        'Булгур',
        'кофе'
      ],
      photo: {
        src: menu1,
        alt: 'Меню №1'
      },
      price: 60
    },
    {
      id: 2,
      titleMenu: 'Комплекс №2 - Дневной отдых',
      setMenu: [
        'Суп Легкий',
        'Стейк из телятины в соусе Бешамель',
        'Булгур',
        'кофе'
      ],
      photo: {
        src: menu2,
        alt: 'Меню №2'
      },
      price: 200
    },
    {
      id: 3,
      titleMenu: 'Комплекс №3 - Утренняя бодрость',
      setMenu: ['Суп Борщ', 'Стейк из телятины', 'кофе'],
      photo: {
        src: menu3,
        alt: 'Меню №3'
      },
      price: 150
    }
  ],
  flowers: [
    {
      id: 1,
      photo: {
        src: flowers1,
        alt: 'Розы'
      },
      description: 'Букет классический из 9 роз',
      price: 85
    },
    {
      id: 2,
      photo: {
        src: flowers2,
        alt: 'Хризантемы'
      },
      description: 'Букет “Свежесть” из 7 розовых хризантем',
      price: 70
    },
    {
      id: 3,
      photo: {
        src: flowers3,
        alt: 'Лилии'
      },
      description: 'Букет из оранжевых лилий',
      price: 60
    }
  ],
  decor: [
    {
      id: 1,
      photo: {
        src: decor1,
        alt: 'Романтик'
      },
      description: 'Романтик',
      price: 50
    },
    {
      id: 2,
      photo: {
        src: decor2,
        alt: 'Роскошь'
      },
      description: 'Роскошь',
      price: 60
    },
    {
      id: 3,
      photo: {
        src: decor3,
        alt: 'День рождения'
      },
      description: 'День рождения',
      price: 50
    }
  ]
};

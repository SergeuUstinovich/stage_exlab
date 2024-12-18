import { YMapLocationRequest } from 'ymaps3';

export interface ICity {
  id: number;
  name: string;
  coords: YMapLocationRequest;
}

export const city: ICity[] = [
  {
    id: 0,
    name: 'Беларусь',
    coords: {
      center: [53.902735, 27.555691],
      zoom: 7
    }
  },
  {
    id: 1,
    name: 'Минск',
    coords: {
      center: [27.561831, 53.902284],
      zoom: 12
    }
  },
  {
    id: 2,
    name: 'Брест',
    coords: {
      center: [23.685107, 52.093754],
      zoom: 12
    }
  },
  {
    id: 3,
    name: 'Гродно',
    coords: {
      center: [23.829529, 53.677839],
      zoom: 12
    }
  },
  {
    id: 4,
    name: 'Витебск',
    coords: {
      center: [30.202878, 55.184217],
      zoom: 12
    }
  }
];

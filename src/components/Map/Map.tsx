import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapMarker,
  reactify
} from '../../lib/ymap';
import { ICity } from '../../pages/MainPage/mocks/city';
import { IRestaurantCardProps } from '../RestaurantCard/RestaurantCard';

import style from './Map.module.scss';

export interface IMapProps {
  city: ICity;
  restaurants: IRestaurantCardProps[];
}

function Map(mapProps: IMapProps) {
  return (
    <div style={{ width: '530px', height: '411px' }}>
      <YMap location={reactify.useDefault(mapProps.city.coords)}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        {mapProps.restaurants.map((i) => (
          <YMapMarker coordinates={reactify.useDefault(i.cords)}>
            <div className={style.marker}></div>
          </YMapMarker>
        ))}
      </YMap>
    </div>
  );
}

export default Map;

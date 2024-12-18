import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapMarker,
  reactify
} from '../../lib/ymap';
import type { LngLat } from 'ymaps3';
import { ICity } from '../../pages/MainPage/mocks/city';

import style from './Map.module.scss';

export interface IMapProps {
  city: ICity;
  coords?: LngLat[];
}

function Map(mapProps: IMapProps) {
  return (
    <div style={{ width: '530px', height: '411px' }}>
      <YMap location={reactify.useDefault(mapProps.city.coords)}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
      </YMap>
    </div>
  );
}

export default Map;

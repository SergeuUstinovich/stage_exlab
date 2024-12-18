import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button/Button';
import CapIcon from '../../assets/svg/CapIcon/CapIcon';
import MapPoint from '../../assets/svg/MapPoint/MapPoint';
import OpeningHours from '../../assets/svg/OpeningHours/OpeningHours';
import styles from './RestaurantCard.module.scss';
import { LngLat } from '@yandex/ymaps3-types';

export interface Photo {
  src: string;
  alt: string;
}

export interface IRestaurantCardProps {
  id: number;
  name: string;
  description: string;
  comment: string;
  address: string;
  openingHours?: string;
  cuisine?: string;
  hotOffer?: string;
  priceTo?: string;
  photo: Photo;
  cords: LngLat;
}

function RestaurantCard(restaurant: IRestaurantCardProps) {
  return (
    <div className={styles['service-card']}>
      <h3 className={styles['service-title']}>{restaurant.name}</h3>
      <div className={styles['card-wrapper']}>
        <img
          className={styles['service-preview']}
          src={restaurant.photo.src}
          alt={restaurant.photo.alt}
        />
        <div className={styles['service-description']}>
          <div className={styles['address-wrapper']}>
            <div className={styles['address']}>
              <MapPoint /> <span>{restaurant.address}</span>
            </div>
            <div className={styles['address-distance']}>
              <span>1 км от центра</span>
              <Link className={styles['address-link-to-map']} to={'/services'}>
                Показать на карте
              </Link>
            </div>
          </div>
          <div className={styles['opening-hours']}>
            <OpeningHours />{' '}
            <div className={styles['opening-hours-wrapper']}>
              <span>Режим работы</span>&nbsp;
              <span>{restaurant.openingHours}</span>
            </div>
          </div>
          <div className={styles['cuisine-wrapper']}>
            <CapIcon />{' '}
            <div>
              <span>Кухня:</span>&nbsp;
              <span>{restaurant.cuisine}</span>
            </div>
          </div>
          <p className={styles['restaurant-description']}>
            {restaurant.description}
          </p>
          {restaurant.hotOffer && (
            <p className={styles['hot-offer']}>{restaurant.hotOffer}</p>
          )}
        </div>
        <div className={styles['service-booking']}>
          <div className={styles['service-booking-price']}>
            От&nbsp;{restaurant.priceTo}&nbsp;руб.
          </div>
          <Button className={styles['service-booking-btn']}>
            Забронировать
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;

import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button/Button';
import CapIcon from '../../assets/svg/CapIcon/CapIcon';
import MapPoint from '../../assets/svg/MapPoint/MapPoint';
import OpeningHours from '../../assets/svg/OpeningHours/OpeningHours';
import styles from './RestaurantCard.module.scss';
import { Raiting } from '../../ui/Raiting';

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
  is_active: boolean;
  publish: string;
  start_date: string;
  total_tables: number;
  opening_time: string;
  closing_time: string;
  service: number;
  city: number;
  new?: boolean;
  raiting?: 1 | 2 | 3 | 4 | 5;
  photo: Photo;
}

function RestaurantCard(restaurant: IRestaurantCardProps) {
  return (
    <div className={styles['service-card']}>
      <div className={styles['service-header']}>
        <div className={styles['wrapper-title']}>
          <h3 className={styles['service-title']}>{restaurant.name}</h3>
          {restaurant.raiting && <Raiting raiting={restaurant.raiting} />}
        </div>
        {restaurant.new && <div className={styles['new']}>Новинка</div>}
      </div>
      <div className={styles['card-wrapper']}>
        <img
          className={styles['service-preview']}
          src={restaurant.photo.src}
          alt={restaurant.photo.alt}
        />
        <div className={styles['service-description']}>
          <div className={styles['address-wrapper']}>
            <div className={styles['address']}>
              <MapPoint className={styles['map-point']} />{' '}
              <span>{restaurant.address}</span>
            </div>
            <div className={styles['address-distance']}>
              <span>1 км от центра</span>
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
          <Button
            className={styles['service-booking-btn']}
            kind='secondary'
            type='button'
          >
            Забронировать
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;

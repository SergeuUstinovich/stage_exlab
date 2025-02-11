import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button/Button';
import CapIcon from '../../assets/svg/CapIcon/CapIcon';
import MapPoint from '../../assets/svg/MapPoint/MapPoint';
import OpeningHours from '../../assets/svg/OpeningHours/OpeningHours';
import styles from './RestaurantCard.module.scss';
import { Raiting } from '../../ui/Raiting';
import { openingHours } from '../../helpers/openingHours';

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

function RestaurantCard(restaurantCard: IRestaurantCardProps) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/restaurant/${restaurantCard.id}`);
  }
  return (
    <div className={styles['service-card']}>
      <div className={styles['service-header']}>
        <div className={styles['wrapper-title']}>
          <h3 className={styles['service-title']}>{restaurantCard.name}</h3>
          {restaurantCard.raiting && (
            <Raiting raiting={restaurantCard.raiting} />
          )}
        </div>
        {restaurantCard.new && <div className={styles['new']}>Новинка</div>}
      </div>
      <div className={styles['card-wrapper']}>
        <img
          className={styles['service-preview']}
          src={restaurantCard.photo.src}
          alt={restaurantCard.photo.alt}
        />
        <div className={styles['service-description']}>
          <div className={styles['address-wrapper']}>
            <div className={styles['address']}>
              <MapPoint className={styles['map-point']} />{' '}
              <span>{restaurantCard.address}</span>
            </div>
            <div className={styles['address-distance']}>
              <span>1 км от центра</span>
            </div>
          </div>
          <div className={styles['opening-hours']}>
            <OpeningHours />{' '}
            <div className={styles['opening-hours-wrapper']}>
              <span>Режим работы</span>&nbsp;
              <span>
                {openingHours(
                  restaurantCard.opening_time,
                  restaurantCard.closing_time
                )}
              </span>
            </div>
          </div>
          <div className={styles['cuisine-wrapper']}>
            <CapIcon />{' '}
            <div>
              <span>Кухня:</span>&nbsp;
              <span>{restaurantCard.cuisine}</span>
            </div>
          </div>
          <p className={styles['restaurant-description']}>
            {restaurantCard.description}
          </p>
          {restaurantCard.hotOffer && (
            <p className={styles['hot-offer']}>{restaurantCard.hotOffer}</p>
          )}
        </div>
        <div className={styles['service-booking']}>
          <div className={styles['service-booking-price']}>
            От&nbsp;{restaurantCard.priceTo}&nbsp;руб.
          </div>
          <Button
            className={styles['service-booking-btn']}
            kind='secondary'
            type='button'
            onClick={handleClick}
          >
            Забронировать
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;

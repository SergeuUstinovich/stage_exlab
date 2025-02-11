import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button/Button';
import CapIcon from '../../assets/svg/CapIcon/CapIcon';
import MapPoint from '../../assets/svg/MapPoint/MapPoint';
import OpeningHours from '../../assets/svg/OpeningHours/OpeningHours';
import { Raiting } from '../../ui/Raiting';
import { openingHours } from '../../helpers/openingHours';
import styles from './Restaurant.module.scss';
import { restaurant } from './mocks/restaurant';

export interface Photo {
  src: string;
  alt: string;
}

export interface IRestaurantProps {
  id: number;
  title: string;
  description: string;
  address: string;
  openingHours?: string;
  cuisine?: string;
  opening_time: string;
  closing_time: string;
  photos: Photo[];
}

function Restaurant() {
  return (
    <>
      <div className={styles['restaurant']}>
        <h1 className={styles['restaurant__title']}>{restaurant.title}</h1>
        <div className={styles['restaurant__content-wrapper']}>
          <div className={styles['restaurant__content']}>
            <div className={styles['restaurant__foto']}>
              {restaurant.photos[0] && (
                <img
                  src={restaurant.photos[0].src}
                  alt={restaurant.photos[0].alt}
                  className={styles['restaurant__foto--foto-1']}
                />
              )}

              <div className={styles['restaurant__foto-others']}>
                {restaurant.photos[1] && (
                  <img
                    src={restaurant.photos[1].src}
                    alt={restaurant.photos[1].alt}
                    className={styles['restaurant__foto--foto-2']}
                  />
                )}
                {restaurant.photos[2] && (
                  <img
                    src={restaurant.photos[2].src}
                    alt={restaurant.photos[2].alt}
                    className={styles['restaurant__foto--foto-3']}
                  />
                )}
                <Button
                  className={styles['restaurant__foto-btn']}
                  type='button'
                >{`+ ${restaurant.photos.length - 3} фотографий`}</Button>
              </div>

              <div className={styles['restaurant__info-wrapper']}>
                <h3 className={styles['restaurant__info-title']}>
                  Расположение
                </h3>
                <div className={styles['restaurant__info']}>
                  <div className={styles['address-wrapper']}>
                    <div className={styles['address']}>
                      <MapPoint className={styles['map-point']} />{' '}
                      <span>{restaurant.address}</span>
                    </div>
                    <div className={styles['address-distance']}>
                      <span>1 км от центра</span>
                    </div>
                    <Button
                      className={styles['restaurant__map-view']}
                      type='button'
                    >
                      Показать на карте
                    </Button>
                  </div>

                  <div className={styles['opening-hours']}>
                    <OpeningHours />{' '}
                    <div className={styles['opening-hours-wrapper']}>
                      <span>Режим работы</span>&nbsp;
                      <span>
                        {openingHours(
                          restaurant.opening_time,
                          restaurant.closing_time
                        )}
                      </span>
                    </div>
                  </div>

                  <div className={styles['cuisine-wrapper']}>
                    <CapIcon />{' '}
                    <div>
                      <span>Кухня:</span>&nbsp;
                      <span>{restaurant.cuisine}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className={styles['restaurant__description']}>
              {restaurant.description}
            </p>

            <h2 className={styles['restaurant__menu-section']}>
              Выберите доступные варианты меню
            </h2>

            <h2 className={styles['restaurant__services-section']}>
              Выберите дополнительные услуги
            </h2>

            <h2 className={styles['restaurant__decor-section']}>
              Праздничное оформление
            </h2>
          </div>
          <div className={styles['restaurant__right-panel']}></div>
        </div>
      </div>
      <div className={styles['restaurant__summary']}></div>
    </>
  );
}

export default Restaurant;

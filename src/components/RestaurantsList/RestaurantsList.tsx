import { Button } from '../../ui/Button';
import RestaurantCard, {
  IRestaurantCardProps
} from '../RestaurantCard/RestaurantCard';
import { Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './RestaurantsList.module.scss';

export interface IRestaurantsListProps {
  restaurants: IRestaurantCardProps[];
}

const template = ymaps.templateLayoutFactory.createClass(
  '<div>template</div>',
  {
    build: function () {}
  }
);

function RestaurantsList(restaurantsListProps: IRestaurantsListProps) {
  const { restaurants } = restaurantsListProps;

  return (
    <>
      <h2 className={styles.title}>Найдено {restaurants.length} варианта</h2>
      <div className={styles.content}>
        <ul className={styles['services-list']}>
          {restaurants.map((i) => (
            <li className={styles.item} key={i.id}>
              <RestaurantCard {...i} />
            </li>
          ))}
        </ul>
        <div className={styles.right}>
          <div className={styles.map}>
            <Map
              className={styles.map}
              defaultState={{
                center: [55.751574, 37.573856],
                zoom: 8
              }}
            >
              <Placemark geometry={[55.684758, 37.738521]} />
              <Placemark
                geometry={[55.9, 37.1]}
                options={{
                  // Проброс темплейта
                  iconLayout: template
                }}
              />
            </Map>
          </div>
          <div className={styles.banner}>
            <div className={styles['banner-text']}>
              Специальные предложения для зарегистрированных пользователей
            </div>
            <Button className={styles['banner-btn']}>Подробнее</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantsList;

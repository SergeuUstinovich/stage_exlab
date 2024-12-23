import { ICity } from '../../pages/MainPage/mocks/city';
import { Button } from '../../ui/Button';
import Map from '../Map/Map';
import RestaurantCard, {
  IRestaurantCardProps
} from '../RestaurantCard/RestaurantCard';
import styles from './RestaurantsList.module.scss';

export interface IRestaurantsListProps {
  restaurants: IRestaurantCardProps[];
  city: ICity;
}

function RestaurantsList(restaurantsListProps: IRestaurantsListProps) {
  const { restaurants, city } = restaurantsListProps;

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
            <Map city={city} restaurants={restaurants} />
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

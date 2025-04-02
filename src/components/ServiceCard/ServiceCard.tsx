import { Button } from '../../ui/Button';
import CounterButton from '../CounterButton/CounterButton';
import { Photo } from '../RestaurantCard';
import styles from './ServiceCard.module.scss';

export interface IServiceCardProps {
  id: number;
  titleMenu?: string;
  setMenu?: string[];
  photo: Photo;
  description?: string;
  price: number;
}

function ServiceCard(props: IServiceCardProps) {
  const { titleMenu, setMenu, photo, description, price } = props;
  return (
    <div className={styles['service-card']}>
      {titleMenu && <h3 className={styles['title']}>{titleMenu}</h3>}
      {setMenu && (
        <p className={styles['menu']}>
          {setMenu.map((item, index) =>
            index === setMenu.length - 1 ? item : item + ', '
          )}
        </p>
      )}
      <img className={styles['image']} src={photo.src} alt={photo.alt} />
      {description && <p className={styles['description']}>{description}</p>}
      <div className={styles['price']}>
        <span className={styles['price__label']}>Цена</span>
        <div className={styles['price__value']}>
          <span className={styles['price__amount']}>{price}</span>
          <span className={styles['price__currency']}> руб.</span>
        </div>
      </div>
      <CounterButton />
    </div>
  );
}

export default ServiceCard;

import ServiceCard, { IServiceCardProps } from '../ServiceCard/ServiceCard';

import styles from './ServicesList.module.scss';

export interface IServicesListProps {
  cards: IServiceCardProps[];
}

function ServicesList(props: IServicesListProps) {
  const { cards } = props;
  return (
    <ul className={styles['services-list']}>
      {cards.map((i) => (
        <li className={styles['services-item']} key={i.id}>
          <ServiceCard
            id={i.id}
            titleMenu={i.titleMenu}
            setMenu={i.setMenu}
            photo={i.photo}
            description={i.description}
            price={i.price}
          />
        </li>
      ))}
    </ul>
  );
}

export default ServicesList;

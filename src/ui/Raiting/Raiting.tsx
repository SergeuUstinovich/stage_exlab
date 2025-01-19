import star from '../../assets/svg/star-not-active.svg';
import starActive from '../../assets/svg/star-active.svg';
import styles from './Raiting.module.scss';

export interface IRaitingProps {
  raiting: 1 | 2 | 3 | 4 | 5;
}

export function Raiting(props: IRaitingProps) {
  const { raiting } = props;
  const stars: Array<0 | 1> = Array(5).fill(0);

  for (const item in stars) {
    if (Number(item) < raiting) stars[item] = 1;
  }

  return (
    <ul className={styles['raiting']}>
      {stars.map((i) =>
        i === 1 ? (
          <li className={styles['star']}>
            <img src={starActive} />
          </li>
        ) : (
          <li className={styles['star']}>
            <img src={star} />
          </li>
        )
      )}
    </ul>
  );
}

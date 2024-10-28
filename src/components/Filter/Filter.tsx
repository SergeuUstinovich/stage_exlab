import Select from '../Select/Select';
import { IOptionProps } from '../Select';
import styles from './Filter.module.scss';
import Separator from '../Separator/Separator';

const services: IOptionProps[] = [
  { id: 1, value: 'Романтическое свидание' },
  { id: 2, value: 'Гендер-пати' },
  { id: 3, value: 'Свадьба' },
  { id: 4, value: 'День рождения' },
  { id: 5, value: 'Мальчишник' }
];

const city: IOptionProps[] = [
  { id: 1, value: 'Минск' },
  { id: 2, value: 'Брест' },
  { id: 3, value: 'Гродно' },
  { id: 4, value: 'Витебск' }
];

function Filter() {
  return (
    <form className={styles.filter}>
      <Select
        name='service'
        defaultValue={{ id: 0, value: 'Услуга' }}
        options={services}
      />
      <Separator />
      <Select
        name='city'
        defaultValue={{ id: 0, value: 'Город' }}
        options={city}
      />
    </form>
  );
}

export default Filter;

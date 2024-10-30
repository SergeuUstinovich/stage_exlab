import Select from '../Select/Select';
import { IOptionProps } from '../Select';
import { Button } from '../../ui/Button';
import Separator from '../Separator/Separator';
import styles from './Filter.module.scss';

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

const temp: IOptionProps[] = [{ id: 1, value: 'ничего нет' }];

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
      <Separator />
      <Select
        name='date'
        defaultValue={{ id: 0, value: 'Дата' }}
        options={temp}
      />
      <Separator />
      <Select
        name='time'
        defaultValue={{ id: 0, value: 'Время' }}
        options={temp}
      />
      <Button className={styles.button} type='reset'>
        <img src='/src/assets/svg/search.svg' />
      </Button>
    </form>
  );
}

export default Filter;

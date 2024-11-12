import Select from '../Select/Select';
import { IOptionProps } from '../Select';
import { Button } from '../../ui/Button';
import Separator from '../Separator/Separator';
import search from '../../assets/svg/search.svg';
import styles from './Filter.module.scss';
import FilterDate from '../FilterDate/FilterDate';
import FilterTime from '../FilterTime/FilterTime';

const services: IOptionProps[] = [
  { id: 1, value: 'Романтическое свидание' },
  { id: 2, value: 'Гендер-пати' }
];

const city: IOptionProps[] = [
  { id: 1, value: 'Минск' },
  { id: 2, value: 'Брест' },
  { id: 3, value: 'Гродно' },
  { id: 4, value: 'Витебск' }
];

function Filter() {
  return (
    <>
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
        <FilterDate />
        <Separator />
        <FilterTime />
        <Button className={styles.button} type='reset'>
          <img src={search} />
        </Button>
      </form>
    </>
  );
}

export default Filter;

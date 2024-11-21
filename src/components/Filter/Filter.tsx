import Select from '../Select/Select';
import { IOptionProps } from '../Select';
import { Button } from '../../ui/Button';
import Separator from '../Separator/Separator';
import search from '../../assets/svg/search.svg';
import styles from './Filter.module.scss';
import FilterDate from '../FilterDate/FilterDate';

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

export interface IFormValidState {
  service: boolean;
  city: boolean;
  date: boolean;
}

export interface IFilterProps {
  selected: Date | undefined;
  setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formValidState: IFormValidState;
}

function Filter(filterProps: IFilterProps) {
  const { selected, setSelected, handleSubmit, formValidState } = filterProps;

  return (
    <>
      <form className={styles.filter} onSubmit={handleSubmit}>
        <Select
          name='service'
          defaultValue={{ id: 0, value: 'Услуга' }}
          options={services}
          isValid={formValidState.service}
        />
        <Separator />
        <Select
          name='city'
          defaultValue={{ id: 0, value: 'Город' }}
          options={city}
          isValid={formValidState.city}
        />
        <Separator />
        <FilterDate
          selected={selected}
          setSelected={setSelected}
          isValid={formValidState.date}
        />
        <Button className={styles.button} type='submit'>
          <img src={search} />
        </Button>
      </form>
    </>
  );
}

export default Filter;

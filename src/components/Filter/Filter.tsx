import Select from '../Select/Select';
import { IOptionProps } from '../Select';
import { Button } from '../../ui/Button';
import Separator from '../Separator/Separator';
import searchSvg from '../../assets/svg/search.svg';
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
  serviceId?: number;
  cityId?: number;
  selected: Date | undefined;
  setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formValidState: IFormValidState;
}

function Filter(filterProps: IFilterProps) {
  const {
    serviceId,
    cityId,
    selected,
    setSelected,
    handleSubmit,
    formValidState
  } = filterProps;

  function findService(element: IOptionProps) {
    return element.id === serviceId;
  }

  function findCity(element: IOptionProps) {
    return element.id === cityId;
  }

  let serviceSelected = serviceId && services.find(findService);
  if (serviceSelected === undefined || serviceSelected === 0) {
    serviceSelected = { id: 0, value: 'Услуга' };
  }

  let citySelected = cityId && city.find(findCity);
  if (citySelected === undefined || citySelected === 0) {
    citySelected = { id: 0, value: 'Город' };
  }

  return (
    <div className={styles.container}>
      <form className={styles.filter} onSubmit={handleSubmit}>
        <Select
          name='service'
          defaultValue={serviceSelected}
          options={services}
          isValid={formValidState.service}
        />
        <Separator />
        <Select
          name='city'
          defaultValue={citySelected}
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
          <img src={searchSvg} />
        </Button>
      </form>
    </div>
  );
}

export default Filter;

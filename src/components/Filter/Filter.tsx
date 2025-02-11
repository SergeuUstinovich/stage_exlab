import Select from '../Select/Select';
import { IOptionProps } from '../Select';
import { Button } from '../../ui/Button';
import Separator from '../Separator/Separator';
import searchSvg from '../../assets/svg/search.svg';
import styles from './Filter.module.scss';
import FilterDate from '../FilterDate/FilterDate';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'react-day-picker/locale';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

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

const INITIAL_STATE = {
  service: true,
  city: true,
  date: true
};

export interface IFormValidState {
  service: boolean;
  city: boolean;
  date: boolean;
}

export interface IFilterProps {
  // serviceId?: number;
  // cityId?: number;
  // selected: Date | undefined;
  // setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>;
  // handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  // formValidState: IFormValidState;
}

function Filter() {
  // const { serviceId, cityId, selected, setSelected } = filterProps;
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const [formValidState, setFormValidState] = useState(INITIAL_STATE);
  const [selected, setSelected] = useState<Date>();

  const serviceId = Number(searchParam.get('serviceId'));
  const cityId = Number(searchParam.get('cityId'));
  const dateTo = searchParam.get('dateTo');

  useEffect(() => {
    let timerId: number;
    if (
      !formValidState.service ||
      !formValidState.city ||
      !formValidState.date
    ) {
      timerId = setTimeout(() => {
        setFormValidState(INITIAL_STATE);
      }, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [formValidState]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);
    let isFormValid = true;

    if (formValues['service[value]'] === 'Услуга') {
      setFormValidState((state) => ({ ...state, service: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, service: true }));
    }

    if (formValues['city[value]'] === 'Город') {
      setFormValidState((state) => ({ ...state, city: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, city: true }));
    }

    if (!selected) {
      setFormValidState((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, date: true }));
    }

    if (!isFormValid) {
      return;
    }

    const serviceId: number = Number(formValues['service[id]']);
    const cityId: number = Number(formValues['city[id]']);
    const dateTo: string =
      selected != undefined
        ? format(selected, 'yyyy-MM-dd', { locale: ru })
        : format(new Date(), 'yyyy-MM-dd', { locale: ru });

    navigate(
      `/search?serviceId=${serviceId}&cityId=${cityId}&dateTo=${dateTo}`
    );
  };

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

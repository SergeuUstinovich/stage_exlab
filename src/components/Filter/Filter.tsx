import Select from '../Select/Select';
import { IOptionProps } from '../Select';
import { Button } from '../../ui/Button';
import Separator from '../Separator/Separator';
import search from '../../assets/svg/search.svg';
import styles from './Filter.module.scss';
import FilterDate from '../FilterDate/FilterDate';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'react-day-picker/locale';

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

export interface IFilterProps {
  date: string;
  cityId: number;
  serviceId: number;
}

const INITIAL_STATE = {
  service: true,
  city: true,
  date: true
};

function Filter() {
  const [selected, setSelected] = useState<Date>();
  const [formValidState, setFormValidState] = useState(INITIAL_STATE);

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

    console.log(formValues);
    console.log(selected && format(selected, 'yyyy-mm-dd', { locale: ru }));
  };

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

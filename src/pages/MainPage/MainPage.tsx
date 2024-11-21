import Filter from '../../components/Filter/Filter';
import StartContent from './StartContent';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'react-day-picker/locale';

import axios, { AxiosError } from 'axios';
import { LoaderPage } from '../../ui/Loader/LoaderPage';

const api_url =
  import.meta.env.MODE === 'development'
    ? '/api'
    : import.meta.env.VITE_API_BASE_URL;

const INITIAL_STATE = {
  service: true,
  city: true,
  date: true
};

export interface IRestaurant {
  id: number;
  name: string;
  description: string;
  photo: Photo;
  address: string;
  comment: string;
}

export interface Photo {
  src: string;
  alt: string;
}

interface IGetRestaurant {
  serviceId: number;
  cityId: number;
  dateTo: string;
}

function MainPage() {
  const [restaurant, setRestaurant] = useState<IRestaurant[]>([]);
  const [selected, setSelected] = useState<Date>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [formValidState, setFormValidState] = useState(INITIAL_STATE);
  const [defaultState, setDefaultState] = useState<boolean>(true);

  async function getRestaurant(getParam: IGetRestaurant) {
    const { serviceId, cityId, dateTo } = getParam;

    try {
      setDefaultState(false);
      setIsLoading(true);
      const { data } = await axios.get<IRestaurant[]>(
        `${api_url}/establishments/${cityId}/${serviceId}/${dateTo}/${dateTo}`
      );
      setRestaurant(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      setIsLoading(false);
    }
  }

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
        ? format(selected, 'yyyy-mm-dd', { locale: ru })
        : format(new Date(), 'yyyy-mm-dd', { locale: ru });

    getRestaurant({ serviceId, cityId, dateTo });
  };

  return (
    <>
      <Filter
        selected={selected}
        setSelected={setSelected}
        handleSubmit={handleSubmit}
        formValidState={formValidState}
      />
      {defaultState && <StartContent />}
      {isLoading && <LoaderPage />}
      {error && <>{error}</>}
      {!isLoading && restaurant.length > 0 && <div>что то загрузилось</div>}
      {!isLoading && restaurant.length === 0 && <div>Ничего не найдено</div>}
    </>
  );
}

export default MainPage;

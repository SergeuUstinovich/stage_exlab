import Filter from '../../components/Filter/Filter';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'react-day-picker/locale';
import axios, { AxiosError } from 'axios';
import { LoaderPage } from '../../ui/Loader/LoaderPage';
import styles from './SearchPage.module.scss';
import { IRestaurantCardProps } from '../../components/RestaurantCard/RestaurantCard';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';
import { useSearchParams } from 'react-router-dom';

const api_url = import.meta.env.VITE_API_BASE_URL;

// const INITIAL_STATE = {
//   service: true,
//   city: true,
//   date: true
// };

interface IGetRestaurant {
  serviceId: number;
  cityId: number;
  dateTo: string;
}

function SearchPage() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [restaurant, setRestaurant] = useState<IRestaurantCardProps[]>([]);
  const [selected, setSelected] = useState<Date>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  // const [formValidState, setFormValidState] = useState(INITIAL_STATE);

  const serviceId = Number(searchParam.get('serviceId'));
  const cityId = Number(searchParam.get('cityId'));
  const dateTo = searchParam.get('dateTo');

  async function getRestaurant(getParam: IGetRestaurant) {
    const { serviceId, cityId, dateTo } = getParam;

    try {
      setIsLoading(true);
      const { data } = await axios.get<IRestaurantCardProps[]>(
        `${api_url}/api/establishments/${cityId}/${serviceId}/${dateTo}`
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
    if (serviceId && cityId && dateTo) {
      setSelected(new Date(dateTo));
      getRestaurant({ serviceId, cityId, dateTo });
      console.log('трям');
    }
  }, []);

  // useEffect(() => {
  //   let timerId: number;
  //   if (
  //     !formValidState.service ||
  //     !formValidState.city ||
  //     !formValidState.date
  //   ) {
  //     timerId = setTimeout(() => {
  //       setFormValidState(INITIAL_STATE);
  //     }, 1000);
  //   }
  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [formValidState]);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const formValues = Object.fromEntries(formData);
  //   let isFormValid = true;

  //   if (formValues['service[value]'] === 'Услуга') {
  //     setFormValidState((state) => ({ ...state, service: false }));
  //     isFormValid = false;
  //   } else {
  //     setFormValidState((state) => ({ ...state, service: true }));
  //   }

  //   if (formValues['city[value]'] === 'Город') {
  //     setFormValidState((state) => ({ ...state, city: false }));
  //     isFormValid = false;
  //   } else {
  //     setFormValidState((state) => ({ ...state, city: true }));
  //   }

  //   if (!selected) {
  //     setFormValidState((state) => ({ ...state, date: false }));
  //     isFormValid = false;
  //   } else {
  //     setFormValidState((state) => ({ ...state, date: true }));
  //   }

  //   if (!isFormValid) {
  //     return;
  //   }

  //   const serviceId: number = Number(formValues['service[id]']);
  //   const cityId: number = Number(formValues['city[id]']);
  //   const dateTo: string =
  //     selected != undefined
  //       ? format(selected, 'yyyy-MM-dd', { locale: ru })
  //       : format(new Date(), 'yyyy-MM-dd', { locale: ru });

  //   setSearchParam(`serviceId=${serviceId}&cityId=${cityId}&dateTo=${dateTo}`);
  //   getRestaurant({ serviceId, cityId, dateTo });
  // };

  return (
    <>
      <Filter
      // selected={selected}
      // setSelected={setSelected}
      // handleSubmit={handleSubmit}
      // formValidState={formValidState}
      // serviceId={serviceId}
      // cityId={cityId}
      />
      {error && <>{error}</>}
      {isLoading && (
        <div className={styles.loader}>
          <LoaderPage />
        </div>
      )}
      {!isLoading && <RestaurantsList restaurants={restaurant} />}
    </>
  );
}

export default SearchPage;

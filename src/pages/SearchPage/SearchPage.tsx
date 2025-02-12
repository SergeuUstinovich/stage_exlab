import Filter from '../../components/Filter/Filter';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { LoaderPage } from '../../ui/Loader/LoaderPage';
import styles from './SearchPage.module.scss';
import { IRestaurantCardProps } from '../../components/RestaurantCard/RestaurantCard';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';
import { useSearchParams } from 'react-router-dom';

const api_url = import.meta.env.VITE_API_BASE_URL;

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
    }
  }, [serviceId, cityId, dateTo]);

  return (
    <>
      <Filter />
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

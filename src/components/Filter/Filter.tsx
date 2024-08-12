import style from './Filter.module.scss'
import Calendar from 'react-calendar';
import { queryClient } from '../../api/queryClient'
import { getListServices } from '../../api/Filter';
import { useQuery } from "@tanstack/react-query";
import { useSelector } from 'react-redux';
import { getTokenUser } from '../../providers/StoreProvider/selectors/getTokenUser';
import { useEffect, useState } from 'react';
import Selector from './Selector/Selector.tsx';
import Checkbox from '../../assets/svg/Check/Checkbox.tsx';

const services = ['свидание', 'геднр-пати', 'Др Сани']
const cities = ['Минск', 'Подольск', 'Брест', 'Гродно', 'Витебск']


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Filter() {
  const [currentServices, setCurrentServices] = useState<string>('услуги');
  const [currentCities, setCurrentCities] = useState<string>('город');
  const [currentDate, setCurrentDate] = useState<Value>(new Date());
  const [isTouchedDate, setIsTouchedDate] = useState(false);
  const token = useSelector(getTokenUser);
  const queryServices = useQuery({
    queryKey: ['List'],
    queryFn: () => getListServices(token),
    enabled: !!token,
  }, queryClient)

  const handleServices = (service: string) => {
    if (currentServices === service) {
      setCurrentServices('услуги');
    }
    setCurrentServices(service);
  }

  const handleCity = (city: string) => {
    if (currentServices === city) {
      setCurrentCities('город');
    }
    setCurrentCities(city);
  }

  const handleDate = (newDate: Value) => {
    setIsTouchedDate(true);
    setCurrentDate(newDate);
  };

  useEffect(() => {
    console.log(queryServices.data)
  }, [queryServices.data])

  return (
    <div className={`container ${style.container_filter}`}>
      <Selector title={currentServices} >
        <ul className={style.listContainer}>
          {services.map((service, i) => (
            <li className={style.textContainer} key={i} onClick={() => handleServices(service)}>
              <span>{service}</span>
              <Checkbox className={style.checkbox} isActive={currentServices === service} />
            </li>
          ))}
        </ul>
      </Selector>
      <Selector title={currentCities} >
        <ul className={style.listContainer}>
          {cities.map((city, i) => (
            <li className={style.textContainer} key={i} onClick={() => handleCity(city)}>
              <span>{city}</span>
              <Checkbox className={style.checkbox} isActive={currentCities === city} />
            </li>
          ))}
        </ul>
      </Selector>
      <Selector title={
        !isTouchedDate ?
          'Дата' :
          currentDate?.toLocaleString('ru-ru', {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
      }>
        <Calendar onChange={handleDate} value={currentDate} />
      </Selector>
    </div>
  )
}

export default Filter;
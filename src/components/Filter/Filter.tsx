import FilterSelect from '../FilterSelect/FilterSelect';
import style from './Filter.module.scss';

function Filter() {
  return (
    <div className={style.filter}>
      <FilterSelect />
    </div>
  );
}

export default Filter;

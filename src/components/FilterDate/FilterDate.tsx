import { useState } from 'react';
import { ru } from 'react-day-picker/locale';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '../Popover/Popover.tsx';
import triangle from '../../assets/svg/triangle-down.svg';
import { DayPicker } from 'react-day-picker';
import { useTheme } from '../../providers/ThemeContext/useTheme';
// import dayPicker from 'react-day-picker/style.module.css';
// import 'react-day-picker/style.css';
import styles from './FilterDate.module.scss';

function FilterDate() {
  const { theme } = useTheme();
  const [selected, setSelected] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger className={`${styles['popper-trigger']} ${theme}`}>
        {selected ? `${selected.toLocaleDateString()}` : 'Дата'}
        <img className={styles.triangle} src={triangle} />
      </PopoverTrigger>
      <PopoverContent
        className={`${styles['popper-content']} ${theme}`}
        avoidCollisions={false}
        sideOffset={10}
      >
        <DayPicker
          // classNames={dayPicker}
          className={`${styles['rdp-root']} ${theme}`}
          mode='single'
          selected={selected}
          onSelect={setSelected}
          locale={ru}
        />
      </PopoverContent>
    </Popover>
  );
}

export default FilterDate;

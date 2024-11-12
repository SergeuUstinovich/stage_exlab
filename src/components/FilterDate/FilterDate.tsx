import cn from 'classnames';
import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { ru } from 'react-day-picker/locale';
import { format } from 'date-fns';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '../Popover/Popover.tsx';

import { Calendar } from '@/components/ui/calendar';
import { ru } from 'date-fns/locale';

import triangle from '../../assets/svg/triangle-down.svg';
import { useTheme } from '../../providers/ThemeContext/useTheme';
import 'react-day-picker/style.css';
import styles from './FilterDate.module.scss';
import './day-picker.css';

function FilterDate() {
  const { theme } = useTheme();
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger
        className={cn(styles['popper-trigger'], theme, {
          [styles['selected']]: selected !== undefined
        })}
      >
        {selected ? format(selected, 'dd MMMM yyyy', { locale: ru }) : 'Дата'}
        <img className={styles.triangle} src={triangle} />
      </PopoverTrigger>
      <PopoverContent
        className={`${styles['popper-content']} ${theme}`}
        avoidCollisions={false}
        sideOffset={10}
      >
        <DayPicker
          className={`${styles['rdp-root']} ${theme}`}
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default FilterDate;

import { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '../Popover/Popover.tsx';

import { Calendar } from '@/components/ui/calendar';
import { ru } from 'date-fns/locale';

import triangle from '../../assets/svg/triangle-down.svg';
import { useTheme } from '../../providers/ThemeContext/useTheme';
import styles from './FilterDate.module.scss';

function FilterDate() {
  const { theme } = useTheme();
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger className={`${styles['popper-trigger']} ${theme}`}>
        {date ? `${date.toLocaleDateString()}` : 'Дата'}
        <img className={styles.triangle} src={triangle} />
      </PopoverTrigger>
      <PopoverContent
        className={`${styles['popper-content']} ${theme}`}
        avoidCollisions={false}
        sideOffset={10}
      >
        <Calendar
          locale={ru}
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

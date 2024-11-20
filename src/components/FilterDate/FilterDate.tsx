import cn from 'classnames';
import { DayPicker } from 'react-day-picker';
import { ru } from 'react-day-picker/locale';
import { format } from 'date-fns';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '../Popover/Popover.tsx';
import triangle from '../../assets/svg/triangle-down.svg';
import { useTheme } from '../../providers/ThemeContext/useTheme';
import 'react-day-picker/style.css';
import styles from './FilterDate.module.scss';
import './day-picker.css';

export interface IFilterDateProps {
  isValid: boolean;
  selected: Date | undefined;
  setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

function FilterDate({ selected, setSelected, isValid }: IFilterDateProps) {
  const { theme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(styles['popper-trigger'], theme, {
            [styles['selected']]: selected !== undefined,
            [styles['invalid']]: !isValid
          })}
        >
          {selected ? format(selected, 'dd MMMM yyyy', { locale: ru }) : 'Дата'}
          <img className={styles.triangle} src={triangle} />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className={`${styles['popper-content']} ${theme}`}
        avoidCollisions={false}
        sideOffset={10}
      >
        <DayPicker
          className={`${styles['rdp-root']} ${theme}`}
          mode='single'
          selected={selected}
          onSelect={setSelected}
          locale={ru}
          disabled={{ before: new Date() }}
        />
      </PopoverContent>
    </Popover>
  );
}

export default FilterDate;

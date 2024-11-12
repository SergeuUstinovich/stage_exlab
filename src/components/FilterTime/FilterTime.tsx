import cn from 'classnames';
import { useState } from 'react';
import { format } from 'date-fns';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '../Popover/Popover.tsx';
import triangle from '../../assets/svg/triangle-down.svg';
import { useTheme } from '../../providers/ThemeContext/useTheme.ts';
import styles from './FilterTime.module.scss';

function FilterTime() {
  const { theme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger className={cn(styles['popper-trigger'], theme)}>
        {<span>Время</span>}
        <img className={styles.triangle} src={triangle} />
      </PopoverTrigger>
      <PopoverContent
        className={`${styles['popper-content']} ${theme}`}
        avoidCollisions={false}
        sideOffset={10}
      >
        <div>Здесь будет выбор времени...</div>
      </PopoverContent>
    </Popover>
  );
}

export default FilterTime;

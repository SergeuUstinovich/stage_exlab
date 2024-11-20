import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/react';
import cn from 'classnames';
import { useState } from 'react';
import { useTheme } from '../../providers/ThemeContext/useTheme';
import triangle from '../../assets/svg/triangle-down.svg';
import styles from './Select.module.scss';

export interface IOptionProps {
  id: number;
  value: string;
}

export interface ISelectProps {
  name: string;
  defaultValue: IOptionProps;
  options: IOptionProps[];
  isValid?: boolean;
}

function Select(props: ISelectProps) {
  const { theme } = useTheme();
  const { name, defaultValue, options, isValid } = props;
  const [optionValue, setOptionValue] = useState(defaultValue);

  return (
    <>
      <Listbox name={name} value={optionValue} onChange={setOptionValue}>
        <ListboxButton
          className={cn(styles['listbox-button'], {
            [styles.selected]: optionValue.id !== 0,
            [styles.invalid]: !isValid
          })}
        >
          {optionValue.value}
          <img className={styles.triangle} src={triangle} />
        </ListboxButton>
        <ListboxOptions
          className={`${styles.options} ${theme}`}
          anchor='bottom'
          modal={false}
        >
          {options.map((option) => (
            <ListboxOption
              key={option.id}
              value={option}
              className={styles.option}
            >
              <div className={styles['option-content']}>
                {option.value}
                <div className={styles['checkbox']}></div>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </>
  );
}

export default Select;

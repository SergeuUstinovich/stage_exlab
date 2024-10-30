import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/react';
import { useState } from 'react';
import { classNames } from '../../utils/classNames';
import { useTheme } from '../../providers/ThemeContext/useTheme';
import styles from './Select.module.scss';

export interface IOptionProps {
  id: number;
  value: string;
}

export interface ISelectProps {
  name: string;
  defaultValue: IOptionProps;
  options: IOptionProps[];
}

function Select(props: ISelectProps) {
  const { theme } = useTheme();
  const { name, defaultValue, options } = props;
  const [optionValue, setOptionValue] = useState(defaultValue);

  return (
    <>
      <Listbox name={name} value={optionValue} onChange={setOptionValue}>
        <ListboxButton className={styles['listbox-button']}>
          {optionValue.value}
          <img
            className={styles.triangle}
            src='/src/assets/svg/triangle-down.svg'
            alt='Треугольник'
          />
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

import React from 'react';
import classnames from 'classnames';
import * as Select from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@radix-ui/react-icons';
import styles from './FilterSelect.module.scss';

function FilterSelect() {
  const SelectItem = React.forwardRef<
    React.ElementRef<typeof Select.Item>,
    React.ComponentPropsWithoutRef<typeof Select.Item>
  >(({ className, children, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(styles.Item, className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={styles.ItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  });

  return (
    <div className={styles['filter-select']}>
      <Select.Root>
        <Select.Trigger className={styles.Trigger} aria-label='Food'>
          <Select.Value placeholder='Select a fruit…' />
          <Select.Icon className={styles.Icon}>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Content className={styles.Content}>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='blueberry'>Blueberry</SelectItem>
          <SelectItem value='grapes'>Grapes</SelectItem>
          <SelectItem value='pineapple'>Pineapple</SelectItem>
        </Select.Content>
      </Select.Root>
    </div>
  );
}

export default FilterSelect;

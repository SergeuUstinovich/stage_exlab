import { useEffect, useState } from 'react';
import { Button } from '../../ui/Button/Button';

import styles from './CounterButton.module.scss';

export interface ICounterProps {
  count: number;
}

function Counter(props: ICounterProps) {
  let { count } = props;
  const [counter, setCounter] = useState<number>(count);

  useEffect(() => {
    count = counter;
  }, [setCounter, counter]);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };

  return (
    <>
      <Button
        className={styles['btn-counter']}
        kind='secondary'
        onClick={increment}
      >
        <span>+</span>
      </Button>
      {counter}
      <Button
        className={styles['btn-counter']}
        kind='secondary'
        onClick={decrement}
      >
        <span>-</span>
      </Button>
    </>
  );
}

export default Counter;

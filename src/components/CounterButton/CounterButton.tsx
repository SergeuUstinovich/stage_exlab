import Counter from './Counter';
import { useState } from 'react';
import { Button } from '../../ui/Button/Button';

import styles from './CounterButton.module.scss';

function CounterButton() {
  const [counter, setCounter] = useState<number>(0);

  const handlerClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (counter === 0) {
      setCounter(1);
      return;
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <Button
      className={styles['btn']}
      kind='secondary'
      onClick={(e) => {
        handlerClick;
      }}
    >
      {counter === 0 && <span className={styles['btn__label']}>Выбрать</span>}
      {counter > 0 && <Counter count={counter} />}
    </Button>
  );
}

export default CounterButton;

import { RefObject, useEffect, useState } from 'react';

const useDetectClickOutside = (ref: RefObject<HTMLElement> | null) => {
  const [isClickOutside, setClickOutside] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref !== null) {
        setClickOutside(
          ref.current?.contains(e.target as HTMLElement) || false,
        );
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return isClickOutside;
};

export default useDetectClickOutside;

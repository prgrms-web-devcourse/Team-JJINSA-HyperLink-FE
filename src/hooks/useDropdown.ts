import { useCallback, useEffect, useRef, useState } from 'react';

const useDropdown = (initialState = false) => {
  const [visible, setVisible] = useState(initialState);

  const ref = useRef<HTMLDivElement>(null);

  const handleVisibility = useCallback(() => {
    setVisible(!visible);
  }, [setVisible]);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      if (ref.current && !ref.current.contains(target)) {
        setVisible(!visible);
      }
    },
    [ref.current, setVisible]
  );

  useEffect(() => {
    if (visible) {
      window.addEventListener('click', handleClick);
    }

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [visible]);

  return { visible, ref, handleVisibility };
};

export default useDropdown;

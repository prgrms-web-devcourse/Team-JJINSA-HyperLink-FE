import { useEffect, useRef, useState } from 'react';

const useDropdown = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const ref = useRef<HTMLDivElement>(null);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (ref.current && !ref.current.contains(target)) {
      setIsVisible(!isVisible);
    }
  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('click', handleClick);
    }

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isVisible]);

  return { isVisible, ref, handleVisibility };
};

export default useDropdown;

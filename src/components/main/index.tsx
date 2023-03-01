import { Banner } from '@/components/common';
import SearchBar from '@/components/common/header/SearchBar';
import { isHomeScrolledState } from '@/stores/scroll';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import * as style from './style.css';

const Main = () => {
  const setIsHomeScrolled = useSetRecoilState(isHomeScrolledState);

  const [size, setSize] = useState(1.3);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      if (innerWidth >= 1024) {
        setSize(1.3);
      } else if (innerWidth < 1024 && innerWidth >= 824) {
        setSize(1.1);
      } else if (innerWidth < 824 && innerWidth >= 724) {
        setSize(0.9);
      } else if (innerWidth < 724 && innerWidth >= 624) {
        setSize(0.7);
      } else if (innerWidth < 624 && innerWidth >= 524) {
        setSize(0.5);
      } else {
        setSize(0.3);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={style.container}>
      <Banner size={size} />
      <SearchBar
        version="banner"
        onEnterPress={() => setIsHomeScrolled(true)}
      />
    </div>
  );
};

export default Main;

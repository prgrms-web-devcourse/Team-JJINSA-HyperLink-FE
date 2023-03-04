import { Banner } from '@/components/common';
import SearchBar from '@/components/common/header/SearchBar';
import { isHomeScrolledState } from '@/stores/scroll';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import * as style from './style.css';

const Main = () => {
  const setIsHomeScrolled = useSetRecoilState(isHomeScrolledState);

  const getBannerSizeByInnerWidth = () => {
    const { innerWidth } = window;
    if (innerWidth >= 1024) {
      return 1.3;
    } else if (innerWidth < 1024 && innerWidth >= 824) {
      return 1.1;
    } else if (innerWidth < 824 && innerWidth >= 724) {
      return 0.9;
    } else if (innerWidth < 724 && innerWidth >= 624) {
      return 0.7;
    } else if (innerWidth < 624 && innerWidth >= 524) {
      return 0.5;
    } else {
      return 0.3;
    }
  };

  const [size, setSize] = useState(getBannerSizeByInnerWidth());

  useEffect(() => {
    window.addEventListener('resize', () =>
      setSize(getBannerSizeByInnerWidth())
    );

    return () =>
      window.removeEventListener('resize', () =>
        setSize(getBannerSizeByInnerWidth())
      );
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

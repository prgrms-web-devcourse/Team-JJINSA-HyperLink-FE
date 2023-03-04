import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { isHomeScrolledState } from '@/stores/scroll';
import Main from '@/components/main';
import * as style from './style.css';
import MainContents from '@/components/mainContents';
import { Button } from '@/components/common';
import { selectedCategoryState } from '@/stores/selectedCategory';

const CATEGORIES = ['all', 'develop', 'beauty', 'finance'];

const Home = () => {
  const [isHomeScrolled, setIsHomeScrolled] =
    useRecoilState(isHomeScrolledState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const wheelHandler = (e: { deltaY: number }) => {
    const { deltaY } = e;
    const { scrollTop } = ref.current;
    const pageHeight = window.innerHeight - 71;

    if (deltaY > 0) {
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        setIsHomeScrolled(true);
        ref.current.scrollTo({
          top: pageHeight,
          left: 0,
          behavior: 'smooth',
        });
      }
    } else {
      if (scrollTop <= pageHeight) {
        setIsHomeScrolled(false);
        ref.current.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    setIsHomeScrolled(false);
  }, []);

  return (
    <div
      className={style.container({ isScrolled: isHomeScrolled })}
      ref={ref}
      onWheel={wheelHandler}
    >
      <div className={style.banner}>
        <Main />
      </div>
      <div className={style.content}>
        <div className={style.filterButtonGroup}>
          {CATEGORIES.map((category, idx) => (
            <Button
              key={idx}
              version={selectedCategory === category ? 'gray' : 'white'}
              isBold={selectedCategory === category ? true : false}
              shape="circle"
              text={category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
        <MainContents />
      </div>
    </div>
  );
};

export default Home;

import BackToTop from '@/components/backToTop';
import ButtonGroup from '@/components/buttonGroup';
import Main from '@/components/main';
import MainContents from '@/components/mainContents';
import RecommenedCreators from '@/components/recommendedCreators';

import { isAuthorizedState } from '@/stores/auth';
import { isHomeScrolledState } from '@/stores/scroll';
import { selectedCategoryState } from '@/stores/selectedCategory';
import { selectedTabState } from '@/stores/tab';

import { throttleWheel } from '@/utils/optimization/throttle';
import { scrollTo } from '@/utils/scroll';

import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import * as style from './style.css';

const CATEGORIES = ['all', 'develop', 'beauty', 'finance'];

const Home = () => {
  const [isHomeScrolled, setIsHomeScrolled] =
    useRecoilState(isHomeScrolledState);
  const [selectedCategory, setSelectedCategory] = useRecoilState<string>(
    selectedCategoryState
  );
  const tabState = useRecoilValue(selectedTabState);
  const isAuthorized = useRecoilValue(isAuthorizedState);
  const [fabVisible, setFabVisible] = useState(false);

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const handleWheel = (e: { deltaY: number }) => {
    const { deltaY } = e;
    const { scrollTop } = ref.current;
    const pageHeight = window.innerHeight - 78;

    setFabVisible(scrollTop > pageHeight);

    if (deltaY > 0) {
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        setIsHomeScrolled(true);
        scrollTo(ref.current, pageHeight);
      }
    } else {
      if (scrollTop <= pageHeight) {
        setIsHomeScrolled(false);
        scrollTo(ref.current, 0);
      }
    }
  };

  useEffect(() => {
    ref.current.scrollTop = 0;
    setIsHomeScrolled(false);
  }, []);

  useEffect(() => {
    if (isHomeScrolled) {
      const pageHeight = window.innerHeight - 78;
      setIsHomeScrolled(true);
      ref.current.scrollTop = pageHeight;
    }
  }, [tabState]);

  return (
    <div
      className={style.container({ isScrolled: isHomeScrolled })}
      ref={ref}
      onWheel={throttleWheel(handleWheel, 500)}
    >
      <div className={style.banner}>
        <Main
          onScrollDown={() => {
            setIsHomeScrolled(true);
            scrollTo(ref.current, window.innerHeight - 78);
          }}
        />
      </div>
      <div className={style.content}>
        <ButtonGroup
          buttonData={CATEGORIES}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className={style.recommendCreatorWrapper}>
          <RecommenedCreators />
          {isAuthorized ? null : (
            <div className={style.disabledCreatorText}>
              <p className={style.toggleDisabledText}>
                로그인을 하지 않아서 저희가 추천해줄 수 없네요😥
              </p>
              <p>로그인 후 저희의 추천 서비스를 이용해보세요!</p>
            </div>
          )}
        </div>
        <MainContents />
      </div>
      <BackToTop
        onClick={() => scrollTo(ref.current, window.innerHeight - 78)}
        visible={fabVisible}
      />
    </div>
  );
};

export default Home;

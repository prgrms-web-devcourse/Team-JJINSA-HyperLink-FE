import BackToTop from '@/components/backToTop';
import ButtonGroup from '@/components/buttonGroup';
import Main from '@/components/main';
import MainContents from '@/components/mainContents';
import RecommenedCreators from '@/components/recommendedCreators';

import { isAuthorizedState } from '@/stores/auth';
import { isHomeScrolledState } from '@/stores/scroll';
import { selectedCategoryState } from '@/stores/selectedCategory';
import { selectedTabState } from '@/stores/tab';

import { scrollTo } from '@/utils/scroll';

import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import * as style from './style.css';
import { isSearchBarVisibleState } from '@/stores/searchBar';

const CATEGORIES = ['all', 'develop', 'beauty', 'finance'];

const Home = () => {
  const [isHomeScrolled, setIsHomeScrolled] =
    useRecoilState(isHomeScrolledState);
  const [selectedCategory, setSelectedCategory] = useRecoilState<string>(
    selectedCategoryState
  );
  const setIsSearchBarVisible = useSetRecoilState(isSearchBarVisibleState);

  const tabState = useRecoilValue(selectedTabState);
  const isAuthorized = useRecoilValue(isAuthorizedState);
  const [fabVisible, setFabVisible] = useState(false);

  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const bannerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    containerRef.current.scrollTop = 0;
    setIsHomeScrolled(false);

    if (!containerRef.current || !bannerRef.current || !contentRef.current)
      return;

    const bannerIO = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!isHomeScrolled) {
          setIsHomeScrolled(false);
          scrollTo(containerRef.current, 0);
          setFabVisible(false);
        }
      }
    });
    const contentIO = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!isHomeScrolled) {
          setIsHomeScrolled(true);
          scrollTo(containerRef.current, window.innerHeight - 68);
          setFabVisible(true);
        }
      }
    });

    bannerIO.observe(bannerRef.current);
    contentIO.observe(contentRef.current);

    return () => {
      bannerIO.disconnect();
      contentIO.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isHomeScrolled) {
      setIsHomeScrolled(true);
      containerRef.current.scrollTop = window.innerHeight - 68;
    }
  }, [tabState]);

  return (
    <div
      className={style.container({ isScrolled: isHomeScrolled })}
      ref={containerRef}
    >
      <div className={style.banner} ref={bannerRef}>
        <Main
          onScrollDown={() => {
            setIsHomeScrolled(true);
            scrollTo(containerRef.current, window.innerHeight - 68);
          }}
        />
      </div>
      <div className={style.content} ref={contentRef}>
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
        onClick={() => scrollTo(containerRef.current, window.innerHeight - 68)}
        visible={fabVisible}
      />
    </div>
  );
};

export default Home;

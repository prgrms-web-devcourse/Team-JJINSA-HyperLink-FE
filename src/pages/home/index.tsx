import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isHomeScrolledState } from '@/stores/scroll';
import Main from '@/components/main';
import { throttleWheel } from '@/utils/optimization/throttle';
import * as style from './style.css';
import MainContents from '@/components/mainContents';
import { selectedCategoryState } from '@/stores/selectedCategory';
import ButtonGroup from '@/components/buttonGroup';
import RecommenedCreators from '@/components/recommendedCreators';
import { selectedTabState } from '@/stores/tab';
import { isAuthorizedState } from '@/stores/auth';

const CATEGORIES = ['all', 'develop', 'beauty', 'finance'];

const Home = () => {
  const [isHomeScrolled, setIsHomeScrolled] =
    useRecoilState(isHomeScrolledState);
  const [selectedCategory, setSelectedCategory] = useRecoilState<string>(
    selectedCategoryState
  );
  const tabState = useRecoilValue(selectedTabState);
  const isAuthorized = useRecoilValue(isAuthorizedState);

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const handleWheel = (e: { deltaY: number }) => {
    const { deltaY } = e;
    const { scrollTop } = ref.current;
    const pageHeight = window.innerHeight - 78;

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
        <Main />
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
              사용자님이 로그인을 하지 않아서 저희가 추천해줄 수 없네요 😥
              <p>로그인 후 저희의 추천 서비스를 이용해보세요!</p>
            </div>
          )}
        </div>
        <MainContents />
      </div>
    </div>
  );
};

export default Home;

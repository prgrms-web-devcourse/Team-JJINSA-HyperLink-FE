import { getCardList } from '@/api/cardlist';
import { ArticleCardProps } from '@/components/cardItem/article';
import CardList from '@/components/cardList';
import { Spinner } from '@/components/common';
import Main from '@/components/main';
import { isHomeScrolledState } from '@/stores/scroll';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as style from './style.css';

const Home = () => {
  const [isHomeScrolled, setIsHomeScrolled] =
    useRecoilState(isHomeScrolledState);
  const [cards, setCards] = useState<ArticleCardProps[]>([]);
  const category = 'all';
  const { data, isLoading, isError } = useQuery(
    ['cardlist', category],
    async () => await getCardList(category),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data: ArticleCardProps[]) => {
        console.log(data);
        setCards(data);
      },
    }
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

  if (isError) return <div>Error!!!</div>;
  if (isLoading) return <Spinner />;

  return (
    <div
      className={style.wrapper({ isScrolled: isHomeScrolled })}
      ref={ref}
      onWheel={wheelHandler}
    >
      <div className={style.banner}>
        <Main />
      </div>
      <div className={style.content}>
        <CardList cards={cards} />
      </div>
    </div>
  );
};

export default Home;
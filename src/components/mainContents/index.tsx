import { useMainContentsInfiniteQuery } from '@/hooks/infiniteQuery/useMainContentsInfinitelQuery';
import { selectedCategoryState } from '@/stores/selectedCategory';
import * as style from './style.css';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilState } from 'recoil';
import ContentCard from '../cardItem/content';
import CardList from '../cardList';
import { Spinner } from '../common';

const MainContents = () => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  const { ref, inView } = useInView({ threshold: 0.9 });
  const {
    getContents,
    getNextPage,
    getContentsIsSuccess,
    getNextPageIsPossible,
    isFetchingNextPage,
    refetch,
  } = useMainContentsInfiniteQuery(selectedCategory);

  useEffect(() => {
    if (inView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [inView]);

  useEffect(() => {
    refetch();
  }, [selectedCategory]);

  return (
    <CardList>
      {
        // 불러오는데 성공하고 데이터가 0개가 아닐 때 렌더링
        getContentsIsSuccess && getContents?.pages
          ? getContents.pages.map((page_data, page_num) => {
              const board_page = page_data.content_page;
              return board_page.map((item, idx) => {
                if (
                  // 마지막 요소에 ref 달아주기
                  getContents.pages.length - 1 === page_num &&
                  board_page.length - 1 === idx
                ) {
                  return (
                    // 마지막 요소에 ref 넣기 위해 div로 감싸기
                    <div ref={ref} key={idx} style={{ width: '100%' }}>
                      <ContentCard key={item.contentId} {...item} />
                    </div>
                  );
                } else {
                  return <ContentCard key={idx} {...item} />;
                }
              });
            })
          : null
      }
      <div className={style.fetching}>
        {isFetchingNextPage && (
          <Spinner size="huge" color="" style={{ zIndex: 9000 }} />
        )}
      </div>
    </CardList>
  );
};

export default MainContents;

import { useEffect } from 'react';
import { useHistoryInfiniteQuery } from '@/hooks/infiniteQuery/useHistoryInfiniteQuery';
import { useInView } from 'react-intersection-observer';
import { Spinner } from '@/components/common';
import CardList from '@/components/cardList';
import ContentCard from '@/components/cardItem/content';
import * as style from './style.css';

const History = () => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const {
    getContents,
    getNextPage,
    getContentsIsSuccess,
    getNextPageIsPossible,
    status,
    isFetching,
    isFetchingNextPage,
  } = useHistoryInfiniteQuery('history');

  useEffect(() => {
    if (inView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [inView]);

  if (status === 'loading') {
    <Spinner size="huge" />;
  }

  console.log('히스토리 페이지');

  return status === 'loading' ? (
    <Spinner size="huge" />
  ) : status === 'error' ? (
    <div>검색 결과 api 에러!!!</div>
  ) : (
    <div className={style.wrapper}>
      <CardList type="content">
        {
          // 불러오는데 성공하고 데이터가 0개가 아닐 때 렌더링
          getContentsIsSuccess && getContents?.pages ? (
            getContents.pages.map((page_data, page_num) => {
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
          ) : (
            <p>검색 결과가 없습니다.</p>
          )
        }
        <div className={style.fetching}>
          {isFetching && isFetchingNextPage && (
            <Spinner size="huge" color="" style={{ zIndex: 9000 }} />
          )}
        </div>
      </CardList>
    </div>
  );
};

export default History;

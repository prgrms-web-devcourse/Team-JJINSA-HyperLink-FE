import { useEffect } from 'react';
import { useHistoryInfiniteQuery } from '@/hooks/infiniteQuery/useHistoryInfiniteQuery';
import { useInView } from 'react-intersection-observer';
import { Spinner } from '@/components/common';
import CardList from '@/components/cardList';
import ContentCard from '@/components/cardItem/content';
import * as style from './style.css';
import NoDataFound from './NoDataFound';

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
    return <Spinner size="huge" />;
  } else if (status === 'error') {
    return <div>검색 결과 api 에러!!!</div>;
  }

  let contents;

  if (
    getContentsIsSuccess &&
    getContents?.pages &&
    getContents?.pages[0].content_page.length
  ) {
    contents = (
      <CardList type="content">
        {getContents.pages.map((page_data, page_num) => {
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
        })}
        <div className={style.fetching}>
          {isFetching && isFetchingNextPage && (
            <Spinner size="huge" color="" style={{ zIndex: 9000 }} />
          )}
        </div>
      </CardList>
    );
  } else {
    contents = <NoDataFound />;
  }

  return <div className={style.wrapper}>{contents}</div>;
};

export default History;

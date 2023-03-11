import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Spinner } from '@/components/common';
import CardList from '@/components/cardList';
import ContentCard from '@/components/cardItem/content';
import SearchInfo from '@/components/searchResult/searchInfo';
import { useSearchContentsInfiniteQuery } from '@/hooks/infiniteQuery/useSearchContentsInfiniteQuery';
import * as style from './style.css';

const searchResultPage = () => {
  const { keyword = '' } = useParams<{ keyword: string }>();

  const { ref, inView } = useInView({ threshold: 0.8 });
  const {
    getContents,
    getNextPage,
    getContentsIsSuccess,
    getNextPageIsPossible,
    status,
    isFetching,
    isFetchingNextPage,
  } = useSearchContentsInfiniteQuery(keyword);
  const searchResultCount = getContents?.pages[0].totalCount || 0;

  useEffect(() => {
    if (inView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [inView]);

  return status === 'loading' ? (
    <Spinner size="huge" />
  ) : status === 'error' ? (
    <div>검색 결과 api 에러!!!</div>
  ) : (
    <div className={style.wrapper}>
      <SearchInfo keyword={keyword} searchResultCount={searchResultCount} />
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
            <Spinner size="huge" style={{ zIndex: 9000 }} />
          )}
        </div>
      </CardList>
    </div>
  );
};

export default searchResultPage;

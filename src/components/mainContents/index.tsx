import { useMainContentsInfiniteQuery } from '@/hooks/infiniteQuery/useMainContentsInfinitelQuery';
import { isAuthorizedState } from '@/stores/auth';
import { lastTabState } from '@/stores/lastTab';
import { selectedCategoryState } from '@/stores/selectedCategory';
import { selectedTabState } from '@/stores/tab';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilState, useRecoilValue } from 'recoil';
import ContentCard from '../cardItem/content';
import CardList from '../cardList';
import { Spinner } from '../common';

const MainContents = () => {
  const isAuthorized = useRecoilValue(isAuthorizedState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );
  const [tabState, setTabState] = useRecoilState(selectedTabState);
  const lastTab = useRecoilValue(lastTabState);

  const { ref, inView } = useInView({ threshold: 0.9 });
  const {
    getContents,
    getNextPage,
    getContentsIsSuccess,
    getNextPageIsPossible,
    isFetchingNextPage,
    refetch,
    status,
  } = useMainContentsInfiniteQuery(selectedCategory);

  useEffect(() => {
    if (inView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [inView, getNextPageIsPossible]);

  useEffect(() => {
    if (
      tabState === 'RECENT_CONTENT' ||
      tabState === 'POPULAR_CONTENT' ||
      tabState === 'SUBSCRIPTIONS'
    ) {
      setSelectedCategory('all');
      refetch();
    }
  }, [tabState, isAuthorized]);

  useEffect(() => {
    setTabState(lastTab);
  }, []);

  // const queryClient = useQueryClient();
  // useEffect(() => {
  //   const handler = () => {
  //     console.log('hello');

  //     const previousQueryData = queryClient.getQueryData(
  //       ['mainContents', selectedCategory],
  //       {
  //         exact: true,
  //       }
  //     );

  //     if (previousQueryData) {
  //       // 데이터가 이미 캐시된 경우, 새로 불러오지 않도록 처리
  //       queryClient.setQueryData(
  //         ['mainContents', selectedCategory],
  //         previousQueryData
  //       );
  //     }
  //   };
  //   window.addEventListener('popstate', handler);

  //   return () => {
  //     window.removeEventListener('popstate', handler);
  //   };
  // }, [queryClient]);

  if (status === 'loading') {
    return <Spinner size="huge" />;
  } else if (status === 'error') {
    return <div>검색 결과 api 에러!!!</div>;
  }

  return (
    <CardList type="content">
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
                    <div
                      ref={ref}
                      key={item.contentId}
                      style={{ width: '100%' }}
                    >
                      <ContentCard {...item} />
                    </div>
                  );
                } else {
                  return (
                    <div key={item.contentId} style={{ width: '100%' }}>
                      <ContentCard {...item} />
                    </div>
                  );
                }
              });
            })
          : null
      }
      <div>
        {isFetchingNextPage && <Spinner size="huge" style={{ zIndex: 9000 }} />}
      </div>
    </CardList>
  );
};

export default MainContents;

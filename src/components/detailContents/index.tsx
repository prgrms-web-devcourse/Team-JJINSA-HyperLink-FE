import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CardList from '@/components/cardList';
import ContentCard from '@/components/cardItem/content';
import { useSpecificCreatorInfiniteQuery } from '@/hooks/infiniteQuery/useSpecificCreatorInfiniteQuery';
import { Spinner } from '../common';

const DetailContents = ({
  creatorId,
  category,
}: {
  creatorId: string;
  category: string;
}) => {
  const { ref, inView } = useInView({ threshold: 0.9 });
  const {
    getContents,
    getNextPage,
    getContentsIsSuccess,
    getNextPageIsPossible,
    isFetchingNextPage,
    refetch,
    isFetching,
  } = useSpecificCreatorInfiniteQuery(creatorId, category);

  useEffect(() => {
    if (inView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [inView]);

  useEffect(() => {
    refetch();
  }, [category]);

  return (
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
          <Spinner size="huge" style={{ zIndex: 9000 }} />
        )
      }
      <div>
        {isFetching && isFetchingNextPage && (
          <Spinner size="huge" style={{ zIndex: 9000 }} />
        )}
      </div>
    </CardList>
  );
};

export default DetailContents;

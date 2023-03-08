import { useEffect, useState } from 'react';
import { Button, Avatar, Heading, Spinner } from '@/components/common';
import * as style from './style.css';
import ButtonGroup from '@/components/buttonGroup';
import { useInView } from 'react-intersection-observer';
import CardList from '@/components/cardList';
import ContentCard from '@/components/cardItem/content';
import { useSpecificCreatorInfiniteQuery } from '@/hooks/infiniteQuery/useSpecificCreatorInfiniteQuery';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { creator } from '@/types/contents';
import { getCreatorInfo } from '@/api/creator';

const FILTER = ['recent', 'popular'];

const CreatorDetailPage = () => {
  const { creatorId: id } = useParams() as { creatorId: string };
  const [selectedFilter, setSelectedFilter] = useState(FILTER[0]);

  const {
    data: creatorInfo,
    isLoading,
    isError,
  } = useQuery<creator>(
    ['creatorInfo', id],
    async () => await getCreatorInfo(+id),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <div>로딩</div>;
  if (isError) return <div>에러</div>;

  const {
    creatorId,
    creatorName,
    subscriberAmount,
    creatorDescription,
    isSubscribed,
    profileImgUrl,
  } = creatorInfo;

  // console.log(creatorId, creatorInfo);

  // const { ref, inView } = useInView({ threshold: 0.9 });
  // const {
  //   getContents,
  //   getNextPage,
  //   getContentsIsSuccess,
  //   getNextPageIsPossible,
  //   isFetchingNextPage,
  //   refetch,
  //   isFetching,
  // } = useSpecificCreatorInfiniteQuery(creatorId, selectedFilter);

  // useEffect(() => {
  //   if (inView && getNextPageIsPossible) {
  //     getNextPage();
  //   }
  // }, [inView]);

  // useEffect(() => {
  //   refetch();
  // }, [selectedFilter]);

  return (
    <div className={style.wrapper}>
      <div className={style.creator}>
        <div className={style.info}>
          <Avatar src={profileImgUrl} />
          <div className={style.detail}>
            <div className={style.header}>
              <Heading level={4} style={{ marginRight: '4rem' }}>
                <strong>{creatorName}</strong>
              </Heading>
              <span className={style.subscriber}>
                구독자 {subscriberAmount}명
              </span>
            </div>
            <div className={style.description}>{creatorDescription}</div>
          </div>
        </div>
        <Button
          version={isSubscribed ? 'blue' : 'blueInverted'}
          paddingSize="small"
          isBold={true}
          onClick={() => console.log('구독')}
          text="구독"
        />
      </div>
      <ButtonGroup
        buttonData={FILTER}
        selectedCategory={selectedFilter}
        setSelectedCategory={setSelectedFilter}
      />
      {/* <CardList type="content">
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
      </CardList> */}
    </div>
  );
};

export default CreatorDetailPage;

import { getCreatorInfo } from '@/api/creator';

import BackToTop from '@/components/backToTop';
import ButtonGroup from '@/components/buttonGroup';
import { Spinner } from '@/components/common';
import DetailContents from '@/components/detailContents';
import CreatorInfo from '@/components/detailContents/creatorInfo';

import { isAuthorizedState } from '@/stores/auth';
import { isHomeScrolledState } from '@/stores/scroll';
import { selectedTabState } from '@/stores/tab';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { creator } from '@/types/contents';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as style from './style.css';

const FILTER = ['recent', 'popular'];

const CreatorDetailPage = () => {
  const { creatorId } = useParams() as { creatorId: string };
  const [selectedFilter, setSelectedFilter] = useState(FILTER[0]);
  const setIsHomeScrolled = useSetRecoilState(isHomeScrolledState);
  const setTabState = useSetRecoilState(selectedTabState);
  const isAuthorized = useRecoilValue(isAuthorizedState);

  const {
    data: creatorInfo,
    isError,
    refetch,
  } = useQuery<creator>(
    ['creatorInfo', +creatorId],
    () => getCreatorInfo(+creatorId),
    {
      refetchOnWindowFocus: false,
      onSuccess: () => {
        setIsHomeScrolled(true);
      },
    }
  );

  useEffect(() => {
    setTabState('none');
  }, []);

  useEffect(() => {
    refetch();
  }, [isAuthorized]);

  if (!creatorInfo) return <Spinner />;
  if (isError) return <div>에러</div>;

  return (
    <div className={style.wrapper}>
      <CreatorInfo {...creatorInfo} />
      <ButtonGroup
        buttonData={FILTER}
        selectedCategory={selectedFilter}
        setSelectedCategory={setSelectedFilter}
      />
      <DetailContents creatorId={creatorId} category={selectedFilter} />
      <BackToTop />
    </div>
  );
};

export default CreatorDetailPage;

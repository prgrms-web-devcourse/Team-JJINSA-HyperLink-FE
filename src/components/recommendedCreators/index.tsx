import { Slider, Spinner } from '@/components/common';
import CreatorCard from '../cardItem/creator';
import { useQuery } from '@tanstack/react-query';
import { recommendedCreators } from '@/types/contents';
import { getRecommendedCreators } from '@/api/creator';
import { RECOMMENDED_CREATORS } from '@/__mocks__/handlers/recommendedCreators';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { isAuthorizedState } from '@/stores/auth';

const RecommenedCreators = () => {
  const isAuthorized = useRecoilValue(isAuthorizedState);

  const { data: recommendedCreators, refetch } = useQuery<recommendedCreators>(
    ['recommendedCreators'],
    getRecommendedCreators,
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [isAuthorized]);

  if (!recommendedCreators) {
    return (
      <Slider headerText="📌 꼭 봐야할 추천 크리에이터">
        {RECOMMENDED_CREATORS.creators.map((creator) => (
          <CreatorCard key={creator.creatorId} {...creator} />
        ))}
      </Slider>
    );
  }

  return (
    <Slider headerText="📌 꼭 봐야할 추천 크리에이터">
      {recommendedCreators.creators.map((recommendedCreator) => (
        <CreatorCard
          key={recommendedCreator.creatorId}
          {...recommendedCreator}
        />
      ))}
    </Slider>
  );
};

export default RecommenedCreators;

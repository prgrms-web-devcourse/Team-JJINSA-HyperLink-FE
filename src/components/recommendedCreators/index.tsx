import { Slider, Spinner } from '@/components/common';
import CreatorCard from '../cardItem/creator';
import { useQuery } from '@tanstack/react-query';
import { recommendedCreators } from '@/types/contents';
import { getRecommendedCreators } from '@/api/creator';

const RecommenedCreators = () => {
  const { data: recommendedCreators } = useQuery<recommendedCreators>(
    ['recommendedCreators'],
    getRecommendedCreators,
    {
      refetchOnWindowFocus: false,
    }
  );

  if (!recommendedCreators) {
    return (
      <div style={{ position: 'relative', height: '24.6rem' }}>
        <Spinner size="huge" />
      </div>
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

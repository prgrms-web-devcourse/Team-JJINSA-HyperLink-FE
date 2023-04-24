import { Avatar } from '@/components/common';
import { banner } from '@/types/contents';
import { useState, useEffect } from 'react';
import * as style from './style.css';
import favicon from '/favicon.ico';

const RecommendationBanner = ({
  recommendations,
  type,
}: {
  recommendations?: banner[];
  type: 'avatar' | 'text';
}) => {
  if (recommendations?.length === 0) {
    recommendations = [
      { bannerName: '아직 사람들이', bannerLogoImgUrl: favicon },
    ];
  }
  const [currentRecommendation, setCurrentRecommendation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRecommendation(
        (currentRecommendation + 1) %
          (!recommendations ? 1 : recommendations.length)
      );
    }, 5000);

    return () => clearInterval(intervalId);
  });

  const recommendationClasses = Array.from(
    { length: recommendations?.length as number },
    (_, index) =>
      index === currentRecommendation
        ? style.activeFlipBanner({ type })
        : style.previousFlipBanner({ type })
  );

  return (
    <div className={style.flipAnimationContainer}>
      {recommendations && recommendations[0].bannerName !== '아직 사람들이' ? (
        recommendations?.map((recommendation, index) => (
          <div
            key={recommendation.bannerName}
            className={`${style.flipBanner} ${recommendationClasses[index]}`}
          >
            <div
              className={`${style.recommendationName} ${recommendationClasses[index]}`}
            >
              {type === 'avatar' ? (
                <Avatar
                  src={recommendation.bannerLogoImgUrl || favicon}
                  size="small"
                  shape="circle"
                />
              ) : (
                recommendation.bannerName
              )}
            </div>
          </div>
        ))
      ) : (
        <div
          className={`${style.flipBanner} ${style.activeFlipBanner({
            type,
          })}`}
        >
          <div>
            <div
              className={`${style.recommendationName} ${style.activeFlipBanner({
                type,
              })}`}
            >
              {type === 'avatar' ? (
                <Avatar src={favicon} size="small" shape="circle" />
              ) : (
                `아직 사람들이`
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationBanner;

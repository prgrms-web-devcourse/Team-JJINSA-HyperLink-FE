import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { Heading, Avatar, Spinner } from '@/components/common';
import {
  Ranking,
  Summary,
  CategoryChart,
  ContentsCountChart,
} from '@/components/dailyBriefing';
import { getDailyBriefingData } from '@/api/dailyBriefing';
import { dailyBriefing } from '@/types/dailyBriefing';
import { selectedTabState } from '@/stores/tab';
import logo from '/favicon.ico';
import * as style from './style.css';

const DailyBriefingPage = () => {
  const setTabState = useSetRecoilState(selectedTabState);

  useEffect(() => {
    setTabState('none');
  }, []);

  const { data, isLoading } = useQuery<dailyBriefing>(
    ['dailyBriefing'],
    getDailyBriefingData
  );

  if (isLoading) return <Spinner size="huge" />;

  const { standardTime, dailyBriefing } = data as dailyBriefing;
  const {
    viewIncrease,
    memberIncrease,
    contentIncrease,
    viewByCategories,
    memberCountByAttentionCategories,
  } = dailyBriefing;

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.intro}>
          <div className={style.logo}>
            <Avatar src={logo} shape="round" size="small" />
          </div>
          <Heading level={3}>오늘의 hyperlink</Heading>
        </div>
        <Heading level={3}>2월 22일 수요일의 소식</Heading>
      </div>
      <div className={style.cardContainer}>
        <div className={style.wrapColumn({ direction: 'left' })}>
          <Ranking
            standardTime={standardTime}
            data={viewByCategories.sort((a, b) => a.ranking - b.ranking)}
          />
          <CategoryChart
            standardTime={standardTime}
            data={memberCountByAttentionCategories.sort(
              (a, b) => a.ranking - b.ranking
            )}
          />
        </div>
        <div className={style.wrapColumn({ direction: 'right' })}>
          <div className={style.summaryGroup}>
            <Summary
              title="views"
              increase={viewIncrease}
              standardTime={standardTime}
              color="#E3F5FF"
            />
            <Summary
              title="members"
              increase={memberIncrease}
              standardTime={standardTime}
              color="#E5ECF6"
            />
          </div>
          <ContentsCountChart
            standardDate={standardTime.split(' ')[0]}
            count={contentIncrease}
          />
        </div>
      </div>
    </div>
  );
};

export default DailyBriefingPage;

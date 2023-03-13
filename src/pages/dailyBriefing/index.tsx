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

const DAY = ['일', '월', '화', '수', '목', '금', '토'];

const DailyBriefingPage = () => {
  const date = new Date();
  const setTabState = useSetRecoilState(selectedTabState);

  useEffect(() => {
    setTabState('none');
  }, []);

  const { data, isLoading } = useQuery<dailyBriefing>(
    ['dailyBriefing'],
    getDailyBriefingData
  );

  if (isLoading || !data) return <Spinner size="huge" />;

  const { standardTime, dailyBriefing } = data;

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.intro}>
          <div className={style.logo}>
            <Avatar src={logo} shape="round" size="small" />
          </div>
          <Heading level={3}>오늘의 hyperlink</Heading>
        </div>
        <Heading level={3}>
          {date.getMonth() + 1}월 {date.getDate()}일 {DAY[date.getDay()]}요일의
          소식
        </Heading>
      </div>
      <div className={style.cardContainer}>
        <div className={style.wrapColumn({ direction: 'left' })}>
          <Ranking
            standardTime={standardTime}
            data={dailyBriefing.viewByCategories.sort(
              (a, b) => a.ranking - b.ranking
            )}
          />
          <CategoryChart
            standardTime={standardTime}
            data={dailyBriefing.memberCountByAttentionCategories.sort(
              (a, b) => a.ranking - b.ranking
            )}
          />
        </div>
        <div className={style.wrapColumn({ direction: 'right' })}>
          <div className={style.summaryGroup}>
            <Summary
              title="views"
              data={dailyBriefing.viewStatistics}
              standardTime={standardTime}
              color="#E3F5FF"
            />
            <Summary
              title="members"
              data={dailyBriefing.memberStatistics}
              standardTime={standardTime}
              color="#E5ECF6"
            />
          </div>
          <ContentsCountChart data={dailyBriefing.contentIncreaseForWeek} />
        </div>
      </div>
    </div>
  );
};

export default DailyBriefingPage;

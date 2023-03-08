import { Suspense } from 'react';
import { getDailyBriefingData } from '@/api/dailyBriefing';
import { Heading, Avatar, Spinner } from '@/components/common';
import CategoryChart from '@/components/dailyBriefing/CategoryChart';
import ContentsCountChart from '@/components/dailyBriefing/ContentsCountChart';
import Ranking from '@/components/dailyBriefing/Ranking';
import Summary from '@/components/dailyBriefing/Summary';
import * as style from './style.css';
import logo from '/favicon.ico';
import { useQuery } from '@tanstack/react-query';
import { dailyBriefing } from '@/types/dailyBriefing';

const DailyBriefingPage = () => {
  const { data, isLoading } = useQuery<dailyBriefing>(
    ['dailyBriefing'],
    getDailyBriefingData
  );

  if (isLoading) return <Spinner />;

  const { standardTime, dailyBriefing } = data as dailyBriefing;
  const {
    viewIncrease,
    memberIncrease,
    contentIncrease,
    viewByCategorys,
    memberCountByAttentionCategorys,
  } = dailyBriefing;

  console.log('브리핑 페이지, useQuery', data, dailyBriefing);

  const views = {
    title: 'views',
    increase: viewIncrease,
    standardTime,
    color: '#E3F5FF',
  };

  const members = {
    title: 'members',
    increase: memberIncrease,
    standardTime,
    color: '#E5ECF6',
  };

  // useEffect(() => {
  //   (async () => {
  //     const data = await getDailyBriefingData();
  //     console.log(data);
  //   })();
  // }, []);

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
            rankingList={viewByCategorys.sort((a, b) => a.ranking - b.ranking)}
          />
          <CategoryChart />
        </div>
        <div className={style.wrapColumn({ direction: 'right' })}>
          <div className={style.summaryGroup}>
            <Summary summaryData={views} />
            <Summary summaryData={members} />
          </div>
          <ContentsCountChart />
        </div>
      </div>
    </div>
  );
};

export default DailyBriefingPage;

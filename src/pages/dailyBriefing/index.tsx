import { Heading, Avatar } from '@/components/common';
import CategoryChart from '@/components/dailyBriefing/CategoryChart';
import ContentsCountChart from '@/components/dailyBriefing/ContentsCountChart';
import Ranking from '@/components/dailyBriefing/Ranking';
import Summary from '@/components/dailyBriefing/Summary';
import * as style from './style.css';
import logo from '/favicon.ico';

const DailyBriefingPage = () => {
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
          <Ranking />
          <CategoryChart />
        </div>
        <div className={style.wrapColumn({ direction: 'right' })}>
          <div className={style.summaryGroup}>
            <Summary color="#E3F5FF" />
            <Summary color="#E5ECF6" />
          </div>
          <ContentsCountChart />
        </div>
      </div>
    </div>
  );
};

export default DailyBriefingPage;

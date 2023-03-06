import { Badge, Spinner, Tab, Text } from '@/components/common';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import UserNav from './UserNav';

import logo from '/assets/logo.svg';
import { isHomeScrolledState } from '@/stores/scroll';
import { Suspense } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import CountDown from './CountDown';
import * as style from './style.css';
import { mainTabState } from '@/stores/tab';

type tabType =
  | 'RECENT_CONTENT'
  | 'POPULAR_CONTENT'
  | 'SUBSCRIPTIONS'
  | 'CREATORS';

const TAB_LIST = {
  RECENT_CONTENT: '실시간 최신 트렌드',
  POPULAR_CONTENT: '실시간 인기 트렌드',
  SUBSCRIPTIONS: '구독 피드',
  CREATORS: '크리에이터',
};

const Header = () => {
  const isHomeScrolled = useRecoilValue(isHomeScrolledState);
  const [tabState, setTabState] = useRecoilState(mainTabState);

  return (
    <header className={style.header({ isScrolled: isHomeScrolled })}>
      <div className={style.top}>
        <Link to="/" className={style.logo}>
          <img src={logo} alt="hyperlink logo" />
        </Link>
        {isHomeScrolled ? <SearchBar /> : <span></span>}
        {/* Suspense 다른 걸로 교체, 메인 페이지 배너 가운데에 생기는 버그 */}
        <Suspense fallback={<Spinner />}>
          <UserNav />
        </Suspense>
      </div>
      {isHomeScrolled && (
        <div className={style.bottom}>
          <Tab
            items={Object.values(TAB_LIST)}
            onClick={(tab) => {
              const tabName = TAB_LIST[tab as tabType];
              setTabState(tabName);
            }}
          />
          <Link to="/" className={style.dailyBriefing}>
            <div className={style.title}>
              <Text size="small">오늘의 hypelink</Text>
              <Badge top={-10} right={10} />
            </div>
            <CountDown />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

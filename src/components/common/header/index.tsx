import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Spinner, Tab, Text } from '@/components/common';
import SearchBar from './SearchBar';
import UserNav from './userNav/index';
import { isHomeScrolledState } from '@/stores/scroll';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as style from './style.css';
import { selectedTabState } from '@/stores/tab';

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
  const [tabState, setTabState] = useRecoilState(selectedTabState);

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
          <Link to="/daily-briefing" className={style.dailyBriefing}>
            <Text size="small" weight={500}>
              오늘의 hypelink
            </Text>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

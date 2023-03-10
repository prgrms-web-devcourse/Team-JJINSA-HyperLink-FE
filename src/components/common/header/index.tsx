import { lastTabState } from '@/stores/lastTab';
import { isHomeScrolledState } from '@/stores/scroll';
import { selectedTabState } from '@/stores/tab';
import { Suspense } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { Tab, Text } from '@/components/common';
import SearchBar from './SearchBar';
import UserNav from './userNav/index';
import * as variants from '@/styles/variants.css';
import logo from '/assets/logo.svg';
import * as style from './style.css';

const TAB_LIST = {
  RECENT_CONTENT: '실시간 최신 트렌드',
  POPULAR_CONTENT: '실시간 인기 트렌드',
  SUBSCRIPTIONS: '구독 피드',
  CREATORS: '크리에이터',
};

const Header = () => {
  const isHomeScrolled = useRecoilValue(isHomeScrolledState);
  const [tabState, setTabState] = useRecoilState(selectedTabState);
  const setLastTabState = useSetRecoilState(lastTabState);

  // dev pull 하면서 utils에서 가져다 사용하기
  const getKeyByValue = (obj: { [x: string]: string }, value: string) => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const handleLogoClick = () => {
    setLastTabState('RECENT_CONTENT');
    setTabState('RECENT_CONTENT');
  };

  return (
    <header className={style.header({ isScrolled: isHomeScrolled })}>
      <div className={style.top}>
        <Link to="/" className={style.logo} onClick={handleLogoClick}>
          <img src={logo} alt="hyperlink logo" />
        </Link>
        {isHomeScrolled ? <SearchBar /> : <span></span>}
        {/* Suspense 다른 걸로 교체, 메인 페이지 배너 가운데에 생기는 버그 */}
        <Suspense fallback={<></>}>
          <UserNav />
        </Suspense>
      </div>
      {isHomeScrolled && (
        <div className={style.bottom}>
          <Tab
            items={Object.values(TAB_LIST)}
            originalItems={TAB_LIST}
            onClick={(tab) => {
              const tabName = getKeyByValue(TAB_LIST, tab);
              setTabState(tabName as string);
            }}
          />
          <Link
            to="/daily-briefing"
            className={style.dailyBriefing}
            onClick={() => setTabState('DAILY_BRIEFING')}
          >
            <Text
              size="small"
              weight={tabState === 'DAILY_BRIEFING' ? 600 : undefined}
              color={
                tabState === 'DAILY_BRIEFING'
                  ? variants.color.primary
                  : undefined
              }
            >
              오늘의 hypelink
            </Text>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Spinner, Tab, Text } from '@/components/common';
import SearchBar from './SearchBar';
import UserNav from './userNav/index';
import { isHomeScrolledState } from '@/stores/scroll';
import logo from '/assets/logo.svg';
import { useRecoilState } from 'recoil';
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
  const [isHomeScrolled, setIsHomeScrolled] =
    useRecoilState(isHomeScrolledState);
  const [tabState, setTabState] = useRecoilState(selectedTabState);

  // dev pull 하면서 utils에서 가져다 사용하기
  const getKeyByValue = (obj: { [x: string]: string }, value: string) => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const handleLogoClick = () => {
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
        <Suspense fallback={<Spinner />}>
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
            onClick={() => setTabState('none')}
          >
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

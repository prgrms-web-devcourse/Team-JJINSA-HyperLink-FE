import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Badge, Spinner, Tab, Text } from '@/components/common';
import SearchBar from './SearchBar';
import CountDown from './CountDown';
import UserNav from './userNav/index';
import { isHomeScrolledState } from '@/stores/scroll';
import logo from '/assets/logo.svg';
import * as style from './style.css';

const TAB_LIST = [
  '실시간 최신 트렌드',
  '실시간 인기 트렌드',
  '구독 피드',
  '크리에이터',
];

const Header = () => {
  const isHomeScrolled = useRecoilValue(isHomeScrolledState);

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
            items={TAB_LIST}
            onClick={() => {
              console.log('탭 선택');
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

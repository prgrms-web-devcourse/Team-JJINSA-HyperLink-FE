import { Badge, Spinner, Tab, Text } from '@/components/common';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import UserNav from './UserNav';

import logo from '@/assets/logo.svg';
import { isHomeScrolledState } from '@/stores/scroll';
import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import CountDown from './CountDown';
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

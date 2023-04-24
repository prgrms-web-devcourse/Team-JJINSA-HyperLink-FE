import { Icon, Tab, Text, Tooltip } from '@/components/common';
import SearchBar from './SearchBar';
import UserNav from './userNav/index';

import { lastTabState } from '@/stores/lastTab';
import { isHomeScrolledState } from '@/stores/scroll';
import { isSearchBarVisibleState } from '@/stores/searchBar';
import { selectedTabState } from '@/stores/tab';

import { getKeyByValue } from '@/utils/object';

import { Suspense, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import logo from '/assets/logo.svg';

import * as variants from '@/styles/variants.css';
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
  const [isSearchBarVisible, setIsSearchBarVisible] = useRecoilState(
    isSearchBarVisibleState
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
  const [visibility, setVisibility] = useState(
    isSearchBarVisible && isMobile && isHomeScrolled
  );

  const handleLogoClick = () => {
    setLastTabState('RECENT_CONTENT');
    setTabState('RECENT_CONTENT');
  };

  const handleScreenResize = () => {
    if (window.innerWidth >= 576) {
      setIsMobile(false);
      setIsSearchBarVisible(false);
      return;
    }

    setIsMobile(true);
  };

  const handleSearchBarVisibility = useCallback(() => {
    setVisibility((prevVisibility) => !prevVisibility);

    const timeout = setTimeout(() => {
      setIsSearchBarVisible((prevVisibility) => !prevVisibility);
      clearTimeout(timeout);
      setVisibility((prevVisibility) => !prevVisibility);
    }, 200);
  }, [setIsSearchBarVisible, isMobile]);

  useEffect(() => {
    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);

  return (
    <header className={style.header({ isScrolled: isHomeScrolled })}>
      {isSearchBarVisible && isMobile && isHomeScrolled ? (
        <div className={style.mobileSearchBar({ visibility })}>
          <Tooltip message="뒤로가기" position="bottom-start">
            <Icon
              name="arrow-left"
              size="xLarge"
              onClick={handleSearchBarVisibility}
            />
          </Tooltip>
          <SearchBar />
        </div>
      ) : (
        <div className={style.top}>
          <Link to="/" className={style.logo} onClick={handleLogoClick}>
            <img src={logo} alt="hyperlink logo" />
          </Link>
          <span>{isHomeScrolled && <SearchBar />}</span>
          {/* Suspense 다른 걸로 교체, 메인 페이지 배너 가운데에 생기는 버그 */}
          <Suspense fallback={<></>}>
            <UserNav />
          </Suspense>
        </div>
      )}
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

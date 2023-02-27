import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import UserNav from './UserNav';
import Tab from '../tab';
import Badge from '../badge';

import * as style from './style.css';
import logo from '@/assets/logo.svg';

const calculateCountDown = () => {
  const today = new Date();
  const todayTime = today.getTime();
  const tomorrowTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
    0
  ).getTime();

  return tomorrowTime - todayTime;
};

const formatHour = (time: number) => {
  const hour = Math.ceil((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return hour.toString().padStart(2, '0');
};

const formatMin = (time: number) => {
  const min = Math.ceil((time % (1000 * 60 * 60)) / (1000 * 60));
  return min.toString().padStart(2, '0');
};

const formatSec = (time: number) => {
  const sec = Math.ceil((time % (1000 * 60)) / 1000);
  return sec.toString().padStart(2, '0');
};

const Header = () => {
  const [countDown, setCountDown] = useState(calculateCountDown());
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');
  const timerIdRef = useRef<number>(0);

  useEffect(() => {
    timerIdRef.current = window.setInterval(() => {
      setCountDown(calculateCountDown());
    }, 1000);

    return () => clearInterval(timerIdRef.current);
  }, []);

  useEffect(() => {
    setHour(formatHour(countDown));
    setMin(formatMin(countDown));
    setSec(formatSec(countDown));
  }, [countDown]);

  return (
    <header className={style.header}>
      <div className={style.top}>
        <Link to="/" className={style.logo}>
          <img src={logo} alt="hyperlink logo" />
        </Link>
        <SearchBar />
        <UserNav />
      </div>
      <div className={style.bottom}>
        <Tab
          items={[
            '실시간 최신 트렌드',
            '실시간 인기 트렌드',
            '구독 피드',
            '크리에이터',
          ]}
          onClick={() => {
            console.log('탭 선택');
          }}
        />
        <Link to="/" className={style.dailyBriefing}>
          <div className={style.title}>
            오늘의 hypelink
            <Badge top={-10} right={10} />
          </div>
          <div className={style.countDown}>
            {hour}:{min}:{sec}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

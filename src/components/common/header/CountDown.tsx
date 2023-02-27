import { useState, useEffect, useRef } from 'react';
import * as style from './style.css';

const calculateCountDown = () => {
  const today = new Date();
  const todayTime = today.getTime();
  const tomorrowTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    23,
    59,
    59
  ).getTime();

  return tomorrowTime - todayTime;
};

const formatHour = (time: number) => {
  const hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (hour === 24) return '00';
  return hour.toString().padStart(2, '0');
};

const formatMin = (time: number) => {
  const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  if (min === 60) return '00';
  return min.toString().padStart(2, '0');
};

const formatSec = (time: number) => {
  const sec = Math.floor((time % (1000 * 60)) / 1000);
  if (sec === 60) return '00';
  return sec.toString().padStart(2, '0');
};

const CountDown = () => {
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
    <div className={style.countDown}>
      {hour}:{min}:{sec}
    </div>
  );
};

export default CountDown;

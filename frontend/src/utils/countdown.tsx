import React, { useEffect, useState, useMemo } from 'react';
import { COUNTDOWN_DATE, COUNTDOWN_MONTH } from '@/params/header_params';
import '@/css/countdown.css'; 
import { EMOJI2, EMOJI3 } from '@/params/header_params';

const getNextLeapYear = () => {
  let year = new Date().getFullYear();
  while ((year % 4 !== 0) || (year % 100 === 0 && year % 400 !== 0)) {
    year++;
  }
  return year;
};

const calculateTimeLeft = (countToDate: Date) => {
  const now = new Date();
  const difference = countToDate.getTime() - now.getTime();
  
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const FlipCountdown: React.FC = () => {
  const countToDate = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    const afterFeb29 = now > new Date(year, 1, 29);
    const nextLeapYear = isLeapYear && !afterFeb29 ? year : year + (4 - year % 4);

    const untilDate = COUNTDOWN_DATE;
    const untilMonth = COUNTDOWN_MONTH - 1;

    return new Date(nextLeapYear, untilMonth, untilDate);
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(countToDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, countToDate]); 

    return (
      <div className="container">
        <div className="container-segment">
          <span className="flip-card">{String(timeLeft.days).padStart(2, '0')}D</span>:
        </div>
        <div className="container-segment">
          <span className="segment-title"></span>
          <span className="flip-card">{String(timeLeft.hours).padStart(2, '0')}HR</span>:
        </div>
        <div className="container-segment">
          <span className="segment-title"></span>
          <span className="flip-card">{String(timeLeft.minutes).padStart(2, '0')}M</span>:
        </div>
        <div className="container-segment">
          <span className="segment-title"></span>
          <span className="flip-card">{String(timeLeft.seconds).padStart(2, '0')}S</span>
        </div>
      </div>
    );
};

export default FlipCountdown;

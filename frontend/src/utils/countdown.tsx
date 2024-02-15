import React, { useEffect, useState } from 'react';
import '@/css/countdown.css'; 

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
    const leapYear = getNextLeapYear();
    // Adjust here to set the countdown date to February 29th of the next leap year
    const [countToDate] = useState<Date>(new Date(`${leapYear}-02-29T00:00:00`));
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(countToDate));

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(countToDate));
      }, 1000);

      return () => clearTimeout(timer);
    });

    return (
      <div className="container">
        <div className="container-segment">
          <span className="segment-title"></span>
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

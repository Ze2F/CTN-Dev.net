
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';

interface CountdownProps {
  targetDate: Date;
  onComplete: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference <= 0) {
        onComplete();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  if (!mounted) return null; 

  return (
    <div className={styles.container}>
      <h2 className={styles.year2025}>2025</h2>
      <div className={styles.label2025}>Countdown to 2026</div>
      <div className={styles.timer2025}>
        {/* {String(timeLeft.days).padStart(2, '0')}d :{' '} */}
        {String(timeLeft.hours).padStart(2, '0')} :{' '}
        {String(timeLeft.minutes).padStart(2, '0')} :{' '}
        {String(timeLeft.seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

export default Countdown;

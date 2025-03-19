import React, { useState, useEffect } from 'react';
import ProgressBarFill from './ProgressBarFill';
import './ProgressBar.css';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      const clampedProgress = Math.max(0, Math.min(100, progress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='progress-bar-container'>
      <ProgressBarFill progress={scrollProgress} />
    </div>
  );
};

export default ProgressBar;

import React from 'react';
import './ProgressBar.css';

function ProgressBarFill({ progress }) {
  return <div className='progress-bar-fill' style={{ width: `${progress}%` }} />;
}

export default ProgressBarFill;

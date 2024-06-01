import React from 'react';
import ProgressBar from 'react-progress-bar';
import styles from '../styles/Progress.module.css';

const Progress = ({ progress }) => {
  return (
    <div className={styles.progress}>
      <h2>Progress: {progress}%</h2>
      <ProgressBar completed={progress} />
    </div>
  );
};

export default Progress;

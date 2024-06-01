import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import styles from '../styles/Progress.module.css';

const Progress = ({ progress }) => {
  return (
    <div className={styles.progress}>
      <h2>Working hours: {progress}%</h2>
      <ProgressBar completed={progress} />
    </div>
  );
};

export default Progress;

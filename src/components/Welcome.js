import React from 'react';
import styles from '../styles/Welcome.module.css';

const Welcome = ({ name }) => {
  return (
    <div className={styles.welcome}>
      <h1>Welcome, {name}!</h1>
    </div>
  );
};

export default Welcome;

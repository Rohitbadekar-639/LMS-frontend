import React from 'react';
import styles from '../styles/Welcome.module.css';
import photo from './images/photo.png'; 

const Welcome = ({ name }) => {
  return (
    <div className={styles.welcome}>
      <h1>Welcome back, {name}!</h1>
      <h4>Your Students completed 80% of tasks.</h4>
      <h4>Progress is very good!</h4>
      <img src={photo} alt="LMS" className={styles.logo} />
    </div>
  );
};

export default Welcome;

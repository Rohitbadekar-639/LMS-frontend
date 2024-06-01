import React from 'react';
import logo from './logo.png'; 
import styles from '../styles/Header.module.css';

const Header = ({ userName }) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="LMS Logo" className={styles.logo} />
      <h1 className={styles.title}>LMS Dashboard</h1>
      {userName && <p className={styles.user}>{userName}</p>}
    </header>
  );
};

export default Header;

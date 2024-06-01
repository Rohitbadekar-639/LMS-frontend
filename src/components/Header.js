import React, { useState } from 'react';
import logo from './logo.png';
// import { Link } from 'react-router-dom'; 
import styles from '../styles/Header.module.css';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import userAvatar from "./man.png"

const Header = ({ userName, onSearch }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src={logo} alt="LMS Logo" className={styles.logo} />
        <h1 className={styles.title}>LMS Dashboard</h1>
      </div>
      <div className={styles.headerRight}>
        <SearchBar onSearch={onSearch} />
        <UserProfile className="user-profile" name={userName} avatarUrl={userAvatar} 
                     dropdownOpen={dropdownOpen}
                     onToggleDropdown={toggleDropdown} />
      </div>
    </header>
  );
};

export default Header;

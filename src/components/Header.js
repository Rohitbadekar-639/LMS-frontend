import React, { useState } from 'react';
import logo from './images/logo.png';
import styles from '../styles/Header.module.css';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import userAvatar from "./images/man.png";

const Header = ({ userName, onSearch }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src={logo} alt="LMS Logo" className={styles.logo} />
        <h1 className={styles.title}>Leapot Technologies</h1>
      </div>
      <div className={styles.headerRight}>
        <SearchBar onSearch={onSearch} />
        <UserProfile
          className="user-profile"
          name={userName}
          avatarUrl={userAvatar}
          dropdownOpen={dropdownOpen}
          onToggleDropdown={toggleDropdown}
        />
      </div>
    </header>
  );
};

export default Header;

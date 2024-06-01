import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom

const UserProfile = ({ name, avatarUrl }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="user-profile">
      <img src={avatarUrl} alt="User Avatar" />
      <span onClick={toggleDropdown}>{name}</span>
      {dropdownOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserProfile;

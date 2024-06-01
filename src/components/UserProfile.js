import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserProfile = ({ className, name, avatarUrl, dropdownOpen, onToggleDropdown }) => {
  return (
    <div className={className}>
      <img src={avatarUrl} alt="User Avatar" />
      <span onClick={onToggleDropdown}>{name}</span>
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

UserProfile.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  dropdownOpen: PropTypes.bool.isRequired,
  onToggleDropdown: PropTypes.func.isRequired,
};

export default UserProfile;

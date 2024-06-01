import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/grades">Grades</Link>
      </li>
    </ul>
  );
};

export default NavLinks;

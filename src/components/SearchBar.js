import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(searchTerm);
  };

  return (
    <input
      type="text"
      placeholder="Search Courses"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;

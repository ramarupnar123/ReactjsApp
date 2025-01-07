import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search posts by title..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;

import React from 'react';
import '../App.css';

const SearchBar = ({ search, setSearch, handleClick }) => {
  const handleInput = (e) => setSearch(e.target.value);
  return (
    <div className='search-bar'>
      <input type='text' search={search} onChange={handleInput} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;

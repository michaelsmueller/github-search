import React from 'react';
import '../App.css';

const SearchResults = ({ results }) => {
  return results.map((user, index) => <div className='search-result' key={index}>{user.login}</div>);
}

export default SearchResults;

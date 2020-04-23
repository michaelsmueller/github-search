import React from 'react';
import '../App.css';

const SearchResults = ({ state, STATUS }) => {
  const { results, status, error } = state;
  // eslint-disable-next-line default-case
  switch (status) {
    case STATUS.LOADING:
      return <div>Loading</div>;
    case STATUS.LOADED:
      return (
        <ul>
          {results.map((user, index) => 
            <li className='search-result' key={index}>
              <a href={user.html_url}>{user.login}</a>
            </li>
          )}
        </ul>
      )
    case STATUS.ERROR:
      return <div>Error: {error}</div>
  }
}

export default SearchResults;

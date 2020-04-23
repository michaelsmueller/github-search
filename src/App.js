import React from 'react';
import Header from './components/Header';
import GitHubSearch from './components/GitHubSearch';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <GitHubSearch />
    </div>
  );
}

export default App;

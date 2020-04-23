import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

export default class GitHubSearch extends Component {
  state = {
    search: '',
    results: [],
  };

  search(search) {
    console.log('searching', search);
    axios
      .get(`https://api.github.com/search/users?q=${search}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          results: response.data.items,
        })
      })
      .catch((error) => {
        console.log('error', error);
      })
  }

  handleInput = (e) => {
    console.log('e.target', e.target);
    const { value } = e.target;
    this.setState({
      search: value,
    });
  }

  handleClick = (e) => {
    const { search } = this.state;
    this.search(search);
  }

  render() {
    const { search, results } = this.state;
    return (
      <div className='github-search'>
        <input type='text' id='search' value={search} onChange={this.handleInput} />
        <button onClick={this.handleClick}>Search</button>
        {results.map(user => {
          return <div>{user.login}</div>
        })}
      </div>
    );
  }
}
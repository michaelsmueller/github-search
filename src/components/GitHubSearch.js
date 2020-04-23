import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import '../App.css';

export default class GitHubSearch extends Component {
  state = { search: '', results: [] };

  search(search) {
    console.log('searching', search);
    axios
      .get(`https://api.github.com/search/users?q=${search}`)
      .then((response) => this.setState({ results: response.data.items }))
      .catch((error) => console.log('error', error))
  }

  setSearch = (search) => this.setState({ search });

  handleClick = (e) => this.search(this.state.search);

  render() {
    const { search, results } = this.state;
    return (
      <main>
        <SearchBar search={search} setSearch={this.setSearch} handleClick={this.handleClick} />
        <SearchResults results={results} />
      </main>
    );
  }
}

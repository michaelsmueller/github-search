import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import '../App.css';

const STATUS = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
};

export default class GitHubSearch extends Component {
  state = {
    search: '',
    results: [],
    error: undefined,
    status: STATUS.LOADING,
  };

  search(search) {
    axios
      .get(`https://api.github.com/search/users?q=${search}`)
      .then((response) => {
        this.setState({
          results: response.data.items,
          status: STATUS.LOADED,
        })
      })
      .catch((error) => {
        console.log('error', error.message);
        this.setState({
          error: error.message,
          status: STATUS.ERROR,
        })
      })
  }

  setSearch = (search) => this.setState({ search });

  handleClick = (e) => {
    this.setState({
      status: STATUS.LOADING,
    }, this.search(this.state.search)
  )}
  
  componentDidMount = () => {
    this.setState({
      status: STATUS.LOADED,
    })
  }

  render() {
    const { search } = this.state;
    return (
      <main>
        <SearchBar search={search} setSearch={this.setSearch} handleClick={this.handleClick} />        
        <SearchResults state={this.state} STATUS={STATUS} />
      </main>
    );
  }
}

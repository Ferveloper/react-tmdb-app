import React from 'react';
import Showcase from './Showcase';
import Pagination from './Pagination';
import './Search.css';

class Search extends React.Component {

  state = {
    query : sessionStorage.getItem('searchQuery'),
    results : JSON.parse(sessionStorage.getItem('searchResults')),
    page : parseInt(sessionStorage.getItem('searchPage'))
  }

  handleChange = (e) => {
    sessionStorage.setItem('searchQuery', e.target.value);
    this.setState({query: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.query === '') return;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES&query=${this.state.query}&page=1`);
    const { results } = await response.json();
    sessionStorage.setItem('searchResults', JSON.stringify(results));
    sessionStorage.setItem('searchPage', 1);
    this.setState(() => ({ results : results, page : 1}))
  }

  async didComponentUpdate() {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES&query=${this.state.query}&page=${this.state.page}`);
    const { results } = await response.json();
    sessionStorage.setItem('results', JSON.stringify(results));
    this.setState(() => ({ results : results}))
  }

  render() {
    console.log(JSON.parse(sessionStorage.getItem('searchResults')))
    const results = this.state.results;
    return (
      <>
        <form className='form' onSubmit={this.handleSubmit}>
          <input className='text-input' type="text" value={this.state.query} placeholder='Buscar...' onChange={this.handleChange} />
          <button className='button' type='submit'>Buscar</button>
        </form>
        {results.length === 0
        ? null
        : <Pagination page={this.state.page} onChangePage={this.handleChangePage} />}
        <Showcase results={results} />
      </>
    )
  }

  handleChangePage = async (e) => {
    console.log('Search handlePageChange triggered!')
    const newPage = this.state.page + parseInt(e.target.value)
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES&query=${this.state.query}&page=${newPage}`);
    const { results } = await response.json();
    sessionStorage.setItem('searchResults', JSON.stringify(results))
    sessionStorage.setItem('searchPage', JSON.stringify(newPage))
    this.setState({ results: results, page : newPage })
  }
}

export default Search;
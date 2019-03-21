import React from 'react';
import Showcase from './Showcase';
import Pagination from './Pagination';
import api from './api';

class Search extends React.Component {

  state = {
    query : sessionStorage.getItem('searchQuery'),
    results : JSON.parse(sessionStorage.getItem('searchResults')),
    page : parseInt(sessionStorage.getItem('searchPage')),
    loading : false
  }

  handleChange = (e) => {
    sessionStorage.setItem('searchQuery', e.target.value);
    this.setState({query: e.target.value});
  }

  handleSubmit = async (e) => {
    this.setState({ loading : true })
    e.preventDefault();
    const results = await api.search(this.state.query, 1)
    sessionStorage.setItem('searchResults', JSON.stringify(results));
    sessionStorage.setItem('searchPage', 1);
    this.setState({ results : results, page : 1, loading : false })
  }

  render() {
    const results = this.state.results;
    if (this.state.loading) return <div className='no-results'>Cargando. Espera, por favor.</div>
    return (
      <>
        <form className='form' onSubmit={this.handleSubmit}>
          <input className='text-input' type="text" value={this.state.query} placeholder='Buscar...' onChange={this.handleChange} />
          <button className='button' type='submit'>Buscar</button>
        </form>
        {results.length === 0
        ? null
        : <Pagination page={this.state.page} onChangePage={this.handleChangePage} />}
        <Showcase results={results} parent='search' />
      </>
    )
  }

  handleChangePage = async (e) => {
    const newPage = this.state.page + parseInt(e.target.value)
    const results = await api.search(this.state.query, newPage);
    sessionStorage.setItem('searchResults', JSON.stringify(results))
    sessionStorage.setItem('searchPage', JSON.stringify(newPage))
    this.setState({ results: results, page : newPage })
  }
}

export default Search;
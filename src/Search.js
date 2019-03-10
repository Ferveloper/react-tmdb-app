import React from 'react';
import Showcase from './Showcase';
import './Search.css';

class Search extends React.Component {

  state = { query : sessionStorage.getItem('query'), results : JSON.parse(sessionStorage.getItem('results')) }

  handleChange = (e) => {
    sessionStorage.setItem('query', e.target.value);
    this.setState({query: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.query === '') return;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES&query=${this.state.query}`);
    const { results } = await response.json();
    sessionStorage.setItem('results', JSON.stringify(results));
    this.setState(() => ({ results : results}))
  }

  render() {
    console.log(JSON.parse(sessionStorage.getItem('results')))
    const results = this.state.results;
    return (
      <>
        <form className='form' onSubmit={this.handleSubmit}>
          <input className='text-input' type="text" value={this.state.query} placeholder='Buscar...' onChange={this.handleChange} />
          <button className='button' type='submit'>Buscar</button>
        </form>
        <Showcase results={results} />
      </>
    )
  }
}

export default Search;
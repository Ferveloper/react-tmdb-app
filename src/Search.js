import React from 'react';
import Showcase from './Showcase';
import './Search.css';

class Search extends React.Component {

  state = { query : '', results : [] }

  handleChange = (e) => {
    this.setState({query: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.query === '') return;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES&query=${this.state.query}`);
    const { results } = await response.json();
    this.setState(() => ({ results : results}))
  }

  render() {
    const results = this.state.results;
    return (
      <>
        <form className='form' onSubmit={this.handleSubmit}>
          <input className='text-input' type="text" value={this.state.value} placeholder='Buscar...' onChange={this.handleChange} />
          <button className='button' type='submit'>Buscar</button>
        </form>
        <Showcase results={results} />
      </>
    )
  }
}

export default Search;
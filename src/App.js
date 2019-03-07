import React, { Component } from 'react';
import './App.css';

const API_KEY='687ccf3a676569dd642e0706e30a6dae'
class App extends Component {

  state = { results : [] }

  async componentDidMount() {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES&page=1');
    const { results } = await response.json();
    this.setState({ results : results})
		console.log('TCL: App -> componentDidMount -> results', results)
  }
  
  render() {
    const results = this.state.results;
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <ul className='container'>
          {results.map(movie => <li key={movie.id} className='movie'>
          <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}/>
          <div className='title'>{movie.title}</div>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default App;

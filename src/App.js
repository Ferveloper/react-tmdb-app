import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Discover from './Discover';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '687ccf3a676569dd642e0706e30a6dae';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
          <Route exact path="/" component={Discover}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/collections" component={Collections}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
class Search extends Component {

  state = { query : 'a', results : [] }

  async componentDidMount() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES&${this.state.query}`);
    const { results } = await response.json();
    this.setState({ results : results})
		console.log('TCL: App -> componentDidMount -> results', results)
  }

  render() {
    const results = this.state.results;
    return (
      <div>
        <input type='text'/>
        <input type='button' onSubmit={this.handleSubmit} />
        <ul className='container'>
          {results.map(movie => <li key={movie.id} className='movie'>
          <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title}/>
          <div className='title'>{movie.title}</div>
          </li>)}
        </ul>
      </div>
    )
  }
}

class Collections extends Component {
  render() {
    return <div>Mis colecciones</div>
  }
}




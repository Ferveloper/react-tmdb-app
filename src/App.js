import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Discover from './Discover';
import Search from './Search';
import Movie from './Movie';

sessionStorage.setItem('query', '')
sessionStorage.setItem('results', JSON.stringify([]))

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '687ccf3a676569dd642e0706e30a6dae';
class App extends Component {

  // state = { discoverPage : 1, searchPage : 1 }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
          <Route exact path="/" component={Discover}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/collections" component={Collections}/>
          <Route path='/movie/:id' component={Movie} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

class Collections extends Component {
  render() {
    return <div>Mis colecciones</div>
  }
}




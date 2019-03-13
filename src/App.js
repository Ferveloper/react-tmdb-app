import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Discover from './Discover';
import Search from './Search';
import Movie from './Movie';
import CollectionsList from './CollectionsList'

sessionStorage.setItem('discoverResults', JSON.stringify([]));
sessionStorage.setItem('discoverPage', 1);
sessionStorage.setItem('searchQuery', '');
sessionStorage.setItem('searchResults', JSON.stringify([]));
sessionStorage.setItem('searchPage', 1);
localStorage.setItem('collections', JSON.stringify([{collection_name : 'Prueba 1', movies : []}, {collection_name : 'Prueba 2', movies : []}]))

// TODO: Clean and refactor API URLs in fetch calls

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '687ccf3a676569dd642e0706e30a6dae';
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
          <Route exact path="/collections" component={CollectionsList}/>
          <Route path='/movie/:id' component={Movie} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;






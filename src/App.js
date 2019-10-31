import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Discover from './Discover';
import Search from './Search';
import Movie from './Movie';
import CollectionsList from './CollectionsList';
import Collection from './Collection';
import NotFound from './NotFound';
import './setStorages';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header/>
          <Switch>
          <Route exact path='/' component={Discover}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/collections' component={CollectionsList}/>
          <Route path='/movie/:id' component={Movie} />
          <Route path='/collection/:id' component={Collection} />
          <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

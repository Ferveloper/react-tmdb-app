import React from 'react';
import Showcase from './Showcase';

class Discover extends React.Component {

  state = { results : [] }

  async componentDidMount() {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES');
    const { results } = await response.json();
    this.setState({ results : results})
  }

  render() {
    const results = this.state.results;
    return (
      <Showcase results={results} />
    )
  }
}

export default Discover;
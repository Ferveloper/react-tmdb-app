import React from 'react';
import Showcase from './Showcase';
import Pagination from './Pagination';

class Discover extends React.Component {

  state = { results : [], page : 1 }

  async componentDidMount() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES&page=${this.state.page}`);
    const { results } = await response.json();
    this.setState({ results : results})
  }

  async componentDidUpdate() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES&page=${this.state.page}`);
    const { results } = await response.json();
    this.setState({ results : results})
  }

  render() {
    const results = this.state.results;
    return (
      <>
      <Pagination page={this.state.page} pageBack={() => this.setState({page : this.state.page - 1})} pageForward={() => this.setState({page : this.state.page + 1})} />
      <Showcase results={results} />
      </>
    )
  }
}

export default Discover;
import React from 'react';
import Showcase from './Showcase';
import Pagination from './Pagination';
import api from './api';

class Discover extends React.Component {

  state = {
    results : JSON.parse(sessionStorage.getItem('discoverResults')),
    page : parseInt(sessionStorage.getItem('discoverPage'))
  }

  async componentDidMount() {
    // const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=687ccf3a676569dd642e0706e30a6dae&sort_by=popularity.desc&language=es-ES&page=${this.state.page}`);
    // const { results } = await response.json();
    const results = await api.discover(this.state.page)
    this.setState({ results : results})
  }

  render() {
    const results = this.state.results;
    return (
      <>
      <Pagination page={this.state.page} onChangePage={this.handleChangePage} />
      <Showcase results={results} parent='discover'/>
      </>
    )
  }

  handleChangePage = async (e) => {
    const newPage = this.state.page + parseInt(e.target.value)
    // const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES&page=${newPage}`);
    // const { results } = await response.json();
    const results = await api.discover(newPage);
    sessionStorage.setItem('discoverResults', JSON.stringify(results))
    sessionStorage.setItem('discoverPage', JSON.stringify(newPage))
    this.setState({ results: results, page : newPage })
  }
}

export default Discover;
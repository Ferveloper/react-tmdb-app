import React from 'react';
import Showcase from './Showcase';
import Pagination from './Pagination';
import api from './api';

class Discover extends React.Component {

  state = {
    results : JSON.parse(sessionStorage.getItem('discoverResults')),
    page : parseInt(sessionStorage.getItem('discoverPage')),
    loading : true
  }

  async componentDidMount() {
    const results = await api.discover(this.state.page)
    this.setState({ results : results, loading: false})
  }

  render() {
    const results = this.state.results;
    if (this.state.loading) return <div className='no-results'>Cargando. Espera, por favor.</div>
    return (
      <>
      <Pagination page={this.state.page} onChangePage={this.handleChangePage} />
      <Showcase results={results} parent='discover'/>
      </>
    )
  }

  handleChangePage = async (e) => {
    const newPage = this.state.page + parseInt(e.target.value);
    const results = await api.discover(newPage);
    sessionStorage.setItem('discoverResults', JSON.stringify(results));
    sessionStorage.setItem('discoverPage', JSON.stringify(newPage));
    this.setState({ results: results, page : newPage });
  }
}

export default Discover;
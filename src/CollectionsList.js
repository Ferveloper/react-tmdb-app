import React from 'react';
import Showcase from './Showcase';
import Pagination from './Pagination'

class Collections extends React.Component {

  state = {
    results : JSON.parse(localStorage.getItem('collection')),
    page : 1
  }

  render() {
    const results = this.state.results;
    return (
      <>
      <Pagination page={this.state.page} onChangePage={this.handleChangePage} />
      <Showcase results={results} />
      </>
    )
  }
}

export default Collections;
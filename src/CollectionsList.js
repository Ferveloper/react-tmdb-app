import React from 'react';
import { Link } from 'react-router-dom';

class Collections extends React.Component {

  state = {
    collections : JSON.parse(localStorage.getItem('collections'))
  }

  render() {
    return (
      <ul>
        {this.state.collections.map(collection => <li key={collection.id} className='collection'><Link to={`/collection/${collection.id}`} >{collection.name}</Link></li>)}
      </ul>
    )
  }
}

export default Collections;
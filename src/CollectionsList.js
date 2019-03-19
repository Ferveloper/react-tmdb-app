import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionsList.css'

class Collections extends React.Component {

  state = {
    collections : JSON.parse(localStorage.getItem('collections'))
  }

  render() {
    return (
      <ul className='collection-list__container'>
        {this.state.collections.map(collection => <li key={collection.id} className='collection-list__item'><Link className='link' to={`/collection/${collection.id}`} >{collection.name}</Link></li>)}
      </ul>
    )
  }
}

export default Collections;
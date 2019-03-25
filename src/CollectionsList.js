import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionsList.css'

class Collections extends React.Component {

  state = {
    collections : JSON.parse(localStorage.getItem('collections')),
    name : ''
  }

  render() {
    return (
      <>
      <form className='form' onSubmit={this.handleSubmit}>
          <input className='text-input' type="text" value={this.state.name} placeholder='Nombre...' onChange={this.handleChange} />
          <button className='button' type='submit'>Crear colección</button>
        </form>
      <ul className='collection-list__container'>
        {this.state.collections.map(collection => <li key={collection.id} className='collection-list__item'><Link className='link' to={`/collection/${collection.id}`} >{collection.name}</Link></li>)}
      </ul>
      </>
    )
  }

  handleChange = (e) => {
    this.setState({ name : e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.name === '') return;
    const collections = JSON.parse(localStorage.getItem('collections'));
    if (collections.find(collection => collection.name === this.state.name)) {
      alert('Error: Coleccción duplicada. No se ha creado ninguna colección')
      return
    }
    collections.push({ id : collections.length, name : this.state.name, movies : [] })
    localStorage.setItem('collections', JSON.stringify(collections))
    this.setState({ collections : collections, name : '' })
  }
  
}

export default Collections;
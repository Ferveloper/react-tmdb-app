import React from 'react';
import './Collection.css';
import defaultImg from './default.jpg';

class Collection extends React.Component {

  state = {
    collection : JSON.parse(localStorage.getItem('collections')).find(collection => collection.id === parseInt(this.props.match.params.id))
  }

  componentDidMount() {
    // Get collection details from localStorage
  }
  
  render() {
    const collection = this.state.collection;
    console.log(collection)
    return (
      <div className='collection'>
        {collection.movies.map((movie, i) => <li key={i} className='movie-collection'>
          <div className='img-container'><img className='img-collection' src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : defaultImg} alt={movie.title}/></div>
          <div className='main-info'>
            <h2 className="title-collection">{movie.title}</h2>
            <div className="overview-collection">{movie.overview}</div>
          </div>
          <div className='actions'>
            <div className="rating">NOTA: {movie.rating ? movie.rating : 'Sin nota'}</div>
            <button type='submit' className="rate-btn" onClick={this.addRating} >{movie.rating ? 'Puntuar' : 'Cambiar nota'}</button>
            <button type='submit' className="delete-btn" onClick={this.deleteMovie} >Borrar de la colección</button>
          </div>
        </li>)}
      </div>
    )
  }
}

export default Collection;
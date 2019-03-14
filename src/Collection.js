import React from 'react';
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
      <>
        {collection.movies.map((movie, i) => <li key={i} className='movie'>
          <img className='img-showcase' src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : defaultImg} alt={movie.title}/>
          <h2 class="title">{movie.title}</h2>
          <div className="overview">{movie.overview}</div>
          <div className="rating">{movie.rating ? movie.rating : 'Sin nota'}</div>
          <button className="rate-btn" onClick={this.addRating} >{movie.rating ? 'Puntuar' : 'Cambiar nota'}</button>
          <button className="delete-btn" onClick={this.deleteMovie} >Borrar de la colección</button>
        </li>)}
      </>
    )
  }
}

export default Collection;
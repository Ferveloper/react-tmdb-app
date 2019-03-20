import React from 'react';
import './Collection.css';
import defaultImg from './default.jpg';
import MovieSettings from './MovieSettings'

class Collection extends React.Component {

  state = {
    collection : JSON.parse(localStorage.getItem('collections')).find(collection => collection.id === parseInt(this.props.match.params.id)),
    ratings : JSON.parse(localStorage.getItem('ratings'))
  }

  render() {
    const collection = this.state.collection;
		console.log('TCL: Collection -> render -> collection', collection)
    const ratings = this.state.ratings;
		console.log(ratings);
    console.log(collection);
    return (
      <div className='collection__container'>
        {collection.movies.length === 0
        ? <div className='no-results'>Colección sin contenido. Añade películas, por favor</div>
        : collection.movies.map((movie, i) => <li key={i} className='collection__movie'>
          <div className='collection__img-container'><img className='collection__img' src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : defaultImg} alt={movie.title}/></div>
          <div className='collection__main-info'>
            <h2 className='collection__title'>{movie.title}</h2>
            <div className='collection__overview'>{movie.overview}</div>
          </div>
          <MovieSettings 
          collectionId={collection.id}
          movieId={movie.id} 
          movieRating={ratings.find(rating => rating.id === movie.id)
          ? ratings.find(rating => rating.id === movie.id).value
          : 'Sin nota'} 
          onAddRating={this.handleAddRating}
          onDeleteMovie={this.handleDeleteMovie} />
        </li>)}
      </div>
    )
  }

  handleAddRating = (ratings) => {
    this.setState({ ratings : ratings })
  }

  handleDeleteMovie = (collection) => {
    this.setState({collection : collection })
  }
}

export default Collection;
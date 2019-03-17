import React from 'react';

class MovieSettings extends React.Component {
  state = {
    value : this.props.movieRating === 'Sin nota' ? 0 : this.props.movieRating,
    toggle : false
  }

  render() {
    const rating = this.props.movieRating;
    const buttonText = rating === 'Sin nota' ? 'Puntuar' : 'Cambiar nota';
    return (
      <div className='actions'>
      <div className="rating">NOTA: {rating}</div>
      {this.state.toggle
      ? <form className='' onSubmit={this.addRating} >
          <input className='rating' type='number' max='10' min='0' value={this.state.value} onChange={this.handleChange} />
          <button className='rate-btn' type='submit'>{buttonText}</button>
        </form> 
      : <button type='submit' className="rate-btn" onClick={this.handleToggle} >{buttonText}</button>}
      <button type='submit' className="delete-btn" onClick={this.deleteMovie}>Borrar de la colección</button>
    </div>
    )
  }

  handleChange = (e) => {
    this.setState({ value : e.target.value })
  }

  handleToggle = () => {
    this.setState({ toggle : !this.state.toggle })
  }

  addRating = (e) => {
    e.preventDefault();
    this.handleToggle();
    const ratings = JSON.parse(localStorage.getItem('ratings'));
    ratings.find(rating => rating.id === this.props.movieId)
    ? ratings.find(rating => rating.id === this.props.movieId).value = parseInt(this.state.value)
    : ratings.push({id : this.props.movieId, value : parseInt(this.state.value)});
    localStorage.setItem('ratings', JSON.stringify(ratings))
    this.props.onAddRating(ratings)
  }

  deleteMovie = (e) => {
    e.preventDefault();
    const collections = JSON.parse(localStorage.getItem('collections'));
		console.log('TCL: MovieSettings -> deleteMovie -> collections', collections)
    const collection = collections.find(collection => collection.id === this.props.collectionId);
    const movie = collection.movies.find(movie => movie.id === this.props.movieId);
    collections.splice(collections.indexOf(collection), 1);
    collection.movies.splice(collection.movies.indexOf(movie), 1);
    collections.push(collection);
		console.log('TCL: MovieSettings -> deleteMovie -> collections', collections)
    localStorage.setItem('collections', JSON.stringify(collections))
    this.props.onDeleteMovie(collection)
  }
}

export default MovieSettings;
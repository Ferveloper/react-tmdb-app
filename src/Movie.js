import React from 'react';
import './Movie.css';
import defaultImg from './default.jpg'

class Movie extends React.Component {

  state = { movie : {}}

  async componentDidMount() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES`);
    const movie = await response.json();
    this.setState({ movie : movie})
  }

  render() {
    const movie = this.state.movie;
    return (
      <div className='movie-details'>
        <h1 className='movie-title'>{movie.title}</h1>
        <div className='img-container'>
          <img className='img-details' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultImg} alt={movie.title}/>
        </div>
        <button type='submit' className='add-collection-btn' onClick={this.addMovie}>Añadir a mi colección</button>
        <div className='overview'>
        <h2 className='overview-title'>Sinopsis:</h2>
          <article>{movie.overview}</article>
        </div>
      </div>
    )
  }

  addMovie = () => {
    console.log('addMovie triggered!')
    console.log(this.state.movie)
    const collection = JSON.parse(localStorage.getItem('collection'));
    console.log(collection)
    if (!collection.find(movie => movie.id === this.state.movie.id)) {
      collection.push(this.state.movie)
      }
    localStorage.setItem('collection', JSON.stringify(collection))
    console.log(collection)
  }

}

export default Movie;

// TODO: Disable Add button if movie is already in the collection
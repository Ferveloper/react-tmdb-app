import React from 'react';
import './Movie.css';
import defaultImg from './default.jpg'

class Movie extends React.Component {

  state = { movie : {}}

  async componentDidMount() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES`);
    const movie = await response.json();
		console.log(movie)
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
        
        <div className='overview'>
        <h2 className='overview-title'>Sinopsis:</h2>
          <article>{movie.overview}</article>
        </div>
      </div>
    )
  }

}

export default Movie;
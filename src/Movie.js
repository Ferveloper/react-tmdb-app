import React from 'react';
import defaultImg from './default.jpg'

class Movie extends React.Component {

  async componentDidMount() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${this.props.movie.id}?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES`);
    const { results } = await response.json();
    this.setState({ results : results})
  }

  render() {
    const movie = this.props.movie;
    return (
      <div className='movie-details'>
        <h1 className='movie.title'>{movie.title}</h1>
        <div className='img-container'>
          <<img src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : defaultImg} alt={movie.title}/>
        </div>
        <article>
          {movie.overv
            iew}
        </article>
      </div>
    )
  }

}
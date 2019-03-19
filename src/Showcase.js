import React from 'react';
import { Link } from 'react-router-dom';
import './Showcase.css';
import defaultImg from './default.jpg';

const Showcase = (props) => {
  const results = props.results;
  return (
    <ul className='showcase__container'>
      {results.length === 0 

      ? <div className='no-results'>Sin resultados. Realiza una búsqueda, por favor</div>

      : results.map(movie => 
      <Link key={movie.id} className='link' to={`/movie/${movie.id}`}>
        <li key={movie.id} className='showcase__movie'>
          <img className='showcase__img' src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : defaultImg} alt={movie.title}/>
          <div className='showcase__title'>{movie.title}</div>
        </li>
      </Link>)}
    </ul>
  )
}

export default Showcase;
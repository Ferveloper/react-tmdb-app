import React from 'react';
import './Showcase.css';
import defaultImg from './default.jpg';

const Showcase = (props) => {
  const results = props.results;
  return (
    <ul className='container'>
      {results.length === 0 ? <div className='no-results'>Sin resultados. Realiza una búsqueda, por favor</div> : results.map(movie => <li key={movie.id} className='movie'>
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : defaultImg} alt={movie.title}/>
      <div className='title'>{movie.title}</div>
      </li>)}
    </ul>
  )
}

export default Showcase;
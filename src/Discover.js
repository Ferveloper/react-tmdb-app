import React from 'react';

class Discover extends React.Component {

  state = { results : [] }

  async componentDidMount() {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES');
    const { results } = await response.json();
    this.setState({ results : results})
		console.log('TCL: App -> componentDidMount -> results', results)
  }

  render() {
    const results = this.state.results;
    return (
      <ul className='container'>
        {results.map(movie => <li key={movie.id} className='movie'>
        <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title}/>
        <div className='title'>{movie.title}</div>
        </li>)}
      </ul>
    )
  }
}

export default Discover;
import React from 'react';
import './Movie.css';
import defaultImg from './default.jpg';
import api from './api';

class Movie extends React.Component {

  state = { 
            movie : {},
            toggle : false,
            newCollection : '',
            existingCollection : JSON.parse(localStorage.getItem('collections'))[0] ? JSON.parse(localStorage.getItem('collections'))[0].name : '',
            selectedOption : 'new',
            selectedCollection : '',
            loading : true
          }

  async componentDidMount() {
    const movie = await api.movie(this.props.match.params.id);
    this.setState({ movie : movie, loading : false });
  }

  render() {
    const movie = this.state.movie;
    const loading = this.state.loading;
    return (
      <>
        { loading
        ? <div className='no-results'>Cargando. Espera, por favor.</div>
        : <div className='movie__details'>
            <h1 className='movie__title'>{movie.title}</h1>
            <div className='movie__img-container'>
              <img className='movie__img' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultImg} alt={movie.title}/>
            </div>

          { !this.state.toggle 
          ? <button type='submit' className='button' onClick={this.handleToggle}>Añadir a mis favoritos</button>
          : <>
              <form onSubmit={this.handleAddMovie}>
                <input id='new' className='movie__radio' type='radio' name='collection' value={this.state.newCollection} onChange={this.handleOptionChange} checked={this.state.selectedOption === 'new'} /><label htmlFor='new'> Añadir a nueva colección: </label>
                <input className='text-input' type='text' name='collection-name' value={this.state.newCollection} onChange={this.handleInputChange} /><br></br>

            { this.state.existingCollection !== ''
              ? <>
                <input id='existing' className='movie__radio' type='radio' name='collection' value={this.state.existingCollection} onChange={this.handleOptionChange} checked={this.state.selectedOption === 'existing'} />
                <label htmlFor='existing'> Añadir a colección existente: </label>
                <select className='text-input' onChange={this.handleSelectChange}>
                  {JSON.parse(localStorage.getItem('collections')).map((collection, i) => <option key={i} value={collection.name}>{collection.name}</option>)}
                </select>
                </>
              : null
            }

                <br></br>
                <button className='button' type='submit'>Añadir</button>
                <button className='button' onClick={this.handleToggle}>Cancelar</button>
              </form>
            </>}

            <div className='movie__overview'>
              <p className='movie__detail'><strong>Nacionalidad:</strong> {movie.production_countries.map(genre => genre.name).join(', ')}</p>
              <p className='movie__detail'><strong>Géneros:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
              <h2 className='movie__overview-title'>Sinopsis:</h2>
              <p>{movie.overview}</p>
            </div>
          </div> }
      </>
    )
  }

  handleToggle = () => {
    this.setState({ toggle : !this.state.toggle })
  }

  handleInputChange = (e) => {
    this.setState({ newCollection : e.target.value, selectedCollection : this.state.selectedOption === 'new' ? e.target.value : this.state.selectedCollection })
  }

  handleSelectChange = (e) => {
    this.setState({ existingCollection : e.target.value, selectedCollection : this.state.selectedOption === 'existing' ? e.target.value : this.state.selectedCollection })
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.id, selectedCollection : e.target.value })
  }

  handleAddMovie = (e) => {
    e.preventDefault();
    const collections = JSON.parse(localStorage.getItem('collections'))
    if (this.state.selectedCollection === '') {
      alert ('Error: indique un nombre para la colección')
      return
    }
    if (this.state.selectedOption === 'new' && collections.find(collection => collection.name === this.state.selectedCollection)) {
      alert('Error: Coleccción duplicada. No se ha creado ninguna colección')
      return
    }
    if (this.state.selectedOption === 'existing') {
      const collection = collections.find(collection => collection.name === this.state.selectedCollection)
      if (collection.movies.find(movie => movie.id === this.state.movie.id)) {
        alert('Error: Película duplicada. No se ha añadido ninguna película')
        return
      }
    }
    this.state.selectedOption === 'existing' 
    ? collections.find(collection => collection.name === this.state.selectedCollection).movies.push(this.state.movie)
    : collections.push({ id : collections.length, name : this.state.selectedCollection, movies : [{...this.state.movie}] })
    localStorage.setItem('collections', JSON.stringify(collections))
    this.setState({ 
      newCollection : '',
      existingCollection : JSON.parse(localStorage.getItem('collections'))[0] ? JSON.parse(localStorage.getItem('collections'))[0].name : '',
      toggle : false
    })
  }
}

export default Movie;

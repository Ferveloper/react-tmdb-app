import React from 'react';
import './Movie.css';
import defaultImg from './default.jpg'

class Movie extends React.Component {

  state = { 
            movie : {},
            toggle : false,
            newCollection : '',
            existingCollection : JSON.parse(localStorage.getItem('collections'))[0] ? JSON.parse(localStorage.getItem('collections'))[0].name : '',
            selectedOption : 'new',
            selectedCollection : ''
          }

  async componentDidMount() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=687ccf3a676569dd642e0706e30a6dae&language=es-ES`);
    const movie = await response.json();
    this.setState({ movie : movie })
  }

  render() {
    const movie = this.state.movie;
    return (
      <div className='movie-details'>
        <h1 className='movie-title'>{movie.title}</h1>
        <div className='img-container'>
          <img className='img-details' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultImg} alt={movie.title}/>
        </div>

        { !this.state.toggle 
        ? <button type='submit' className='add-favorites-btn' onClick={this.handleToggle}>Añadir a mis favoritos</button>
        : <div>
        <form className='form-favorites' onSubmit={this.addMovie}>
          <input id='new' className='radio' type='radio' name='collection' value={this.state.newCollection} onChange={this.handleOptionChange} checked={this.state.selectedOption === 'new'} /><label htmlFor='new'> Añadir a nueva colección: </label>
          <input className='text-input' type='text' name='collection-name' value={this.state.newCollection} onChange={this.handleInputChange} /><br></br>

          { this.state.existingCollection !== ''
              ? <><input id='existing' className='radio' type='radio' name='collection' value={this.state.existingCollection} onChange={this.handleOptionChange} checked={this.state.selectedOption === 'existing'} />
              <label htmlFor='existing'> Añadir a colección existente: </label>
              <select className='text-input' onChange={this.handleSelectChange}>
                {JSON.parse(localStorage.getItem('collections')).map((collection, i) => <option key={i} value={collection.name}>{collection.name}</option>)}
              </select></>
              : null
            }

          <br></br>
          <button className='button' type='submit'>Añadir</button>
          <button className='button' onClick={this.handleToggle}>Cancelar</button>
        </form>
        </div>}

        <div className='overview'>
        <h2 className='overview-title'>Sinopsis:</h2>
          <article>{movie.overview}</article>
        </div>
      </div>
    )
  }

  handleToggle = () => {
    this.setState({ toggle : !this.state.toggle })
  }

  handleInputChange = (e) => {
    console.log(e.target.value)
    this.setState({ newCollection : e.target.value, selectedCollection : this.state.selectedOption === 'new' ? e.target.value : this.state.selectedCollection })
  }

  handleSelectChange = (e) => {
    console.log(e.target.value)
    this.setState({ existingCollection : e.target.value, selectedCollection : this.state.selectedOption === 'existing' ? e.target.value : this.state.selectedCollection })
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.id, selectedCollection : e.target.value })
  }

  addMovie = (e) => {
    e.preventDefault();
    console.log('addMovie triggered!')
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
  }
}

export default Movie;

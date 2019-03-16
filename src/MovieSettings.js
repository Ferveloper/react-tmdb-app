import React from 'react';

class MovieSettings extends React.Component {
  state = {
    rating : JSON.parse(localStorage.getItem('movieRatings'))
  }

  render() {
    const rating = this.state.rating.rating;
    return (
      <div className='actions'>
      <div className="rating">NOTA: {rating ? rating : 'Sin nota'}</div>
      <button type='submit' className="rate-btn" onClick={this.addRating} >{rating ? 'Cambiar nota' : 'Puntuar'}</button> 
      <form className=''>
        <input className='rating' type='number' max='10' min='0' value={rating} onChange={this.handleChange} />
        <button className='rate-btn' type='submit'>Puntuar</button>
      </form>
      <button type='submit' className="delete-btn" onClick={this.deleteMovie}>Borrar de la colección</button>
    </div>
    )
  }

  handleChange = (e) => {
    
  }

}

export default MovieSettings;
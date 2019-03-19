import React from 'react';
import './Pagination.css'

function Pagination(props) {
  return (
    <div className='pagination__container'>
      {props.page === 1
      ? null
      : <button type='submit' className='button' value='-1' onClick={props.onChangePage}>Anterior</button>}
      <div className='pagination__current-page'>{props.page}</div>
      <button type='submit' className='button' value='1' onClick={props.onChangePage}>Siguiente</button>
    </div>
  )
}

export default Pagination;

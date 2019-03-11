import React from 'react';
import './Pagination.css'

function Pagination(props) {
  return (
    <div className='pagination'>
      {props.page === 1
      ? null
      : <button type='submit' className='change-page-btn' value='-1' onClick={props.onChangePage}>Anterior</button>}
      <div className='current-page'>{props.page}</div>
      <button type='submit' className='change-page-btn' value='1' onClick={props.onChangePage}>Siguiente</button>
    </div>
  )
}

export default Pagination;
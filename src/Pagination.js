import React from 'react';

function Pagination(props) {
  return (
    <div className='pagination'>
      <button type='submit' className='previous' onClick={props.pageBack}>Anterior</button>
      <div className='current-page'>{props.page}</div>
      <button type='submit' className='previous' onClick={props.pageForward}>Siguiente</button>
    </div>
  )
}

export default Pagination;
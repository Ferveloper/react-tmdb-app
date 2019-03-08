import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <ul className='menu'>
        <li className='menu-item'><NavLink className='link' activeClassName='active-link' exact to='/'>Descubrir</NavLink></li>
        <li className='menu-item'><NavLink className='link' activeClassName='active-link' to='/search'>Buscar</NavLink></li>
        <li className='menu-item'><NavLink className='link' activeClassName='active-link' to='/collections'>Mis colecciones</NavLink></li>
      </ul>
    </header>
  )
}

export default Header;

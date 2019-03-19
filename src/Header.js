import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header__container">
      <ul className='header__menu'>
        <li className='header__menu-item'><NavLink className='header__menu-link' activeClassName='header__active-link' exact to='/'>Descubrir</NavLink></li>
        <li className='header__menu-item'><NavLink className='header__menu-link' activeClassName='header__active-link' to='/search'>Buscar</NavLink></li>
        <li className='header__menu-item'><NavLink className='header__menu-link' activeClassName='header__active-link' to='/collections'>Mis colecciones</NavLink></li>
      </ul>
    </header>
  )
}

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const NavBar = () => {
  return (
    <nav className='navbar'>
      {<Logo />}
      <ul>
        <NavLink to='/'>
          <li>Accueil</li>
        </NavLink>
        <NavLink to='/'>
          <li>Défis</li>
        </NavLink>
        <NavLink to='/'>
          <li>Fonctionnement</li>
        </NavLink>
      </ul>


    </nav>
  );
};

export default NavBar;
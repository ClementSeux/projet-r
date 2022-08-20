import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <ul>
       <NavLink to='/projets' >
        <li>Projets</li>
        </NavLink>
       <NavLink to='/transactions' >
        <li>Transactions</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
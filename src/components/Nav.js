import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
    <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
  </nav>
);

export default Nav;
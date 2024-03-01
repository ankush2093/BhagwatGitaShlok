import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from '../img/logo.png';

import "../css/Nabar.css";
const Navbar = () => {
  return (
<nav className="navbar">
  <div className="container">
    <span className="logo">
     
     <Link to='/'> <img src={logo} alt="Logo" /></Link>
      
      </span>
      <ul className="nav-links">
  <li>
    <NavLink exact to="/">Home</NavLink>
  </li>
  <li>
    <NavLink exact to="/moreslok">More Slok</NavLink>
  </li>
  <li>
    <NavLink exact to="/about">About</NavLink>
  </li>
</ul>

  </div>
</nav>

  );
}

export default Navbar;

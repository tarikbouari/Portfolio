import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="ctn-nav">
    <nav className="nav-bar">
      <span>logo</span>
      <ul>
        <li>
          {' '}
          <Link to="about">About</Link>
        </li>
        <li>
          {' '}
          <Link to="work">Work</Link>
        </li>
        <li>
          {' '}
          <Link to="contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;

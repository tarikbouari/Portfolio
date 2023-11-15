import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className=" w-full">
    <nav className=" h-[70px] text-white flex justify-between items-center px-8">
      <span>TB</span>
      <ul className="flex justify-between w-60 ">
        <li>
          {' '}
          <Link to="about text-2xl ">About</Link>
        </li>
        <li>
          {' '}
          <Link to="work">Project</Link>
        </li>
        <li>
          {' '}
          <Link to="contact">Contact me</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;

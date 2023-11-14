/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="w-full h-screen">
    <div className=" w-full p-4">
      <nav className="container mx-auto h-[70px] w-[80%] text-white flex justify-between items-center ">
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

    <div className="container flex mt-[7rem] mx-auto ">
      <div className="text-white w-[65%] ">
        <h1 className="md:text-8xl  ">
          {' '}
          Hi, I'm
          <span className="text-[#577DE0]">Tarik Bouari</span>
        </h1>
        <h2 className="text-8xl  ">  a Creative full-stack developer from Ghana</h2>
      </div>
      <div className=" p-4"> </div>

    </div>

  </div>
);

export default Header;

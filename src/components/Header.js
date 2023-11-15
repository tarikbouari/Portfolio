/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Nav';

const Header = () => (
  <div className=" mx-auto h-[60vh] md:h-[100vh] container px-6">
    <Navbar />
    <div className=" flex  mx-auto pt-14 px-8 ">
      <div className="text-white ">
        <h1 className="text-2xl md:text-3xl lg:text-7xl  ">
          {' '}
          Hi, I'm
          <span className="text-[#577DE0] ">Tarik Bouari</span>
        </h1>
        <h2 className="text-2xl lg:text-7xl md:text-3xl  ">  a Creative full-stack developer from Ghana</h2>
      </div>
      <div className=" p-4 w-[20%]"> </div>
    </div>
    <div className="py-6 md:w-[80%] lg:w-[60%] mb-4  px-8 ">
      <p className=" "> I love building digital products for startups and businesses to enhance brand visibility and sales growth.</p>
    </div>
    <Link className="capitalize mx-8 mt-8 px-4 py-3 bg-[#577DE0] rounded " to="home">Let' us Connect</Link>
  </div>
);

export default Header;

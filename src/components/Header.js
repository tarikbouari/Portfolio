/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="flex justify-center items-center h-[70vh] md:h-[100vh] xl:h-[100vh]">
    <div className=" mx-auto  container px-6 ">
      <div className=" flex  mx-auto px-8 xl: ">
        <div className="text-white ">
          <h1 className="text-2xl md:text-3xl lg:text-7xl xl:text-9xl  ">
            {' '}
            Hi, I'm
            <span className="text-[#52eeca] ">  Tarik Bouari</span>
          </h1>
          <h2 className="text-2xl lg:text-7xl md:text-3xl  xl:text-9xl  ">  a Creative full-stack developer from Ghana</h2>
        </div>
        <div className=" p-4 w-[20%]"> </div>
      </div>
      <div className="py-6 md:w-[80%] lg:w-[60%] mb-4  px-8 ">
        <p className=" "> I love building digital products for startups and businesses to enhance brand visibility and sales growth.</p>
      </div>
      <Link className="capitalize mx-8 mt-8 px-4 py-3 text-[#000300] bg-[#52eeca] rounded " to="home">Let' us Connect</Link>
    </div>
  </div>

);

export default Header;

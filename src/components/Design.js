/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/cc.jpg';
import img2 from '../images/lxui.jpg';

const Design = () => (
  <div className="w-full">
    <div className="container mx-auto py-20 flex flex-col gap-4 ">
      <h3 className="text-center text-[#cacfde] text-4xl py-5"> UI Design</h3>
      <span className=" py-10 text-center flex justify-center item-center md:w-[50%] mx-auto"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      <div className="md:grid grid-cols-2 gap-2  bg-[#132D3E] px-8 ">
        <div>
          <img src={img1} alt="design" className="p-4 w-full h-auto" />
        </div>

        <img src={img2} alt="ui" className="p-4" />
      </div>
      <Link to="https://www.figma.com/community/file/1111449804431202403/car-rental-website-resoonsive-design" className="text-center py-5 "> <span className="text-[#a8b2d1] hover:text-[#52eeca] py-5">Explore more</span></Link>
    </div>
  </div>
);

export default Design;

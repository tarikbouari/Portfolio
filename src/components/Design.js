/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/cc.jpg';
import img2 from '../images/lxui.jpg';

const Design = () => (
  <div className="w-full">
    <div className="container mx-auto py-20 flex flex-col gap-4 ">
      <h3 className="text-center text-[#cacfde] text-4xl py-5"> UI Design</h3>
      <span className=" py-10 text-center flex justify-center item-center md:w-[50%] mx-auto"> Luxury car is an UI protype for a car rental web application. User can sign in, create an account and registrer as a driver or are able to rent the luxury car of their choice by picking date of reservation and returning date.  The UI is built with figma and has 3 different screen: desktop, Tablet and mobile   </span>
      <div className="md:grid grid-cols-2 gap-2  bg-[#132D3E] px-8 cursor-pointer ">
        <div>
          <img src={img1} alt="design" className="p-4 w-full h-auto hover:scale-50 duration-300" />
        </div>

        <img src={img2} alt="ui" className="p-4 hover:scale-50 duration-300" />
      </div>
      <Link to="https://www.figma.com/community/file/1111449804431202403/car-rental-website-resoonsive-design" target="_blank" className="mt-4 text-center py-3 outline outline-2 outline-[#52eeca] mx-auto px-3 rounded hover:bg-[#4eccaf]"> <span className="text-[#a8b2d1] hover:text-[#fff] py-5">Explore more</span></Link>
    </div>
  </div>
);

export default Design;

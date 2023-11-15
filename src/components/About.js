/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';

const About = () => (
  <div className="container  px-10 py-4 mt-5 mx-auto flex flex-col gap-4">
    <div className=" flex gap-4 items-center px-8">
      <h2 className=" text-2xl"> About me</h2>
      <div className="border-t-2 border-gray-200px-[0.2px] w-[60%]"> </div>
    </div>
    <div className=" grid grid-cols-2  gap-2 mt-5 p-8">
      <div>
        <h3 className="md:text-2xl">
          Every great design begin with
          an even
          <span className="text-[#577DE0]"> better story</span>
        </h3>
        <p className="mt-4">
          {' '}
          Hello! My name is Brittany and I enjoy creating things that live on the internet.
          My interest in web development started back in 2012 when I decided to try editing
          custom Tumblr themes — turns
          out hacking together a custom reblog button taught me a lot about HTML & CSS!
          Fast-forward to today, and I’ve had the privilege of working at an advertising
          agency,a start-up, a huge corporation, and a student-led design studio.
          My main focus these days is building accessible, inclusive products and
          digital experience at Upstatement for a variety of clients
        </p>
      </div>
      <div className="p-4 ">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between ">

            <h4 className="capitalize md:text-2xl"> Languages</h4>
            <FaArrowCircleDown />
          </div>

          <div className="">
            <div> javascript</div>
            <div> Ruby</div>
            <div> Html/cms</div>
          </div>
        </div>
      </div>
    </div>
    <div className="5rem"> </div>

  </div>
);

export default About;

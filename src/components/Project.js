/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaAddressCard } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import vercel from '../images/ah.jpg';

const Project = () => (
  <div className=" py-5">
    <div className="container mx-auto px-12 py-4">
      <div className=" flex justify-center items-center gap-2 border px-4 py-2 rounded-full w-[150px]">
        <GrProjects />
        <span>Projects</span>
      </div>

      <div className="grid grid-cols-2  py-8">

        <div className="flex flex-col gap-4 p-8 bg-[#132D3E] mt-20">
          <h3 className="text-2xl text-[#52eeca]">Project Titre</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            Excepteur sint occaecat cupidatat non
          </p>
          <div className=" tool and platform flex  gap-2 w-full">
            <div className="tool w-[50%]">
              <h4 className="text-xl text-[#ccc]"> Tools</h4>
              <div className="icon flex gap-4">
                <p>github</p>
                <p>react</p>
                <p>redux</p>
              </div>
            </div>
            <div className="platform w-[50%]">
              <h4 className="text-xl text-[#ccc]"> Platforme</h4>
              <div className="flex gap-4">
                <FaAddressCard />
                <FaAddressCard />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#112240] w-fll p-8">
          <img src={vercel} alt="project1" className="w-100 h-[auto]" />
        </div>
      </div>
      <TypeAnimation
        sequence={[
        // Same substring at the start will only be typed out once, initially
          'We produce food for Mice',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'We produce food for Hamsters',
          1000,
          'We produce food for Guinea Pigs',
          1000,
          'We produce food for Chinchillas',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  </div>
);

export default Project;

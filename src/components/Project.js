/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { GrProjects } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import data from './ProjectsData';

const Project = () => (
  <div className=" py-5">
    <div className="container mx-auto px-12 py-4" id="project">
      <div className=" flex justify-center items-center gap-2 border px-4 py-2 rounded-full w-[150px]">
        <GrProjects />
        <span>Projects</span>
      </div>
      { data.map((item) => (
        <div key={data.length} className="grid grid-cols-2  py-8">

          <div className="flex flex-col gap-4 p-8 bg-[#132D3E] mt-20">
            <h3 className="text-2xl text-[#52eeca]">{item.titre}</h3>
            <p>{item.text}</p>
            <div className=" tool and platform flex  gap-2 w-full">
              <div className="tool w-[50%]">
                <h4 className="text-xl text-[#ccc]"> Tools</h4>
                <div className="icon flex gap-4 mt-2">
                  <p>{item.tools.frist}</p>
                  <p>{item.tools.second}</p>
                  <p>{item.tools.third}</p>
                </div>
              </div>
              <div className="platform w-[50%]">
                <h4 className="text-xl text-[#ccc] "> Links</h4>
                <div className="flex gap-4 mt-2">
                  <Link to={item.links.git}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </Link>
                  <Link to={item.links.source}>
                    {' '}
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    {' '}

                  </Link>

                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#112240] w-fll p-8 flex items-center">
            <img src={item.image} alt={item.titre} className="w-100 h-[auto]" />
          </div>

        </div>
      ))}
    </div>
  </div>
);

export default Project;

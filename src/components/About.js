/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import ht from '../images/html-logo.webp';
import ruby from '../images/ruby-logo.png';
import css from '../images/css-logo.png';
import mysql from '../images/mysql-logo.png';
import tail from '../images/tail.png';
import postgres from '../images/postgresql-logo.png';
import rails from '../images/rails-logo.png';
import Skill from './Skills';

const About = () => (
  <div className="w-full mx-auto md:p-6 xl:p-10">
    <div className="container  px-4 py-4 mt-5 mx-auto flex flex-col gap-4 xl:pt-[8rem] ">
      <div className=" flex  items-center px-12">
        <div className=" flex items-center gap-2 border px-4 py-2 rounded-full">
          <GoPerson className=" text-[#52eeca] w-5 h-5" />
          <h2 className="text-lg "> About me</h2>
        </div>
        <div className="border-t-[1px] border-[#F0F3FC]-600 w-[30%]"> </div>
      </div>
      <div className=" md:grid grid-cols-2  gap-4 mt-5 p-8  ">
        <div className="p-4">
          <h3 className="text-xl md:text-3xl">
            Every  developer
            has it's
            <span className="text-[#52eeca]"> own story</span>
          </h3>
          <p className="mt-4">
            {' '}
            Hello!  my name is tarik bouari, i'm a fullstack developer and UI designer.
            I have 3 years experience building digital products for startups and businesses.
            <br />
            <br />

            My interest in web development come from my abitlity to solve problems and
            my dedication to always bring something new and original to the table whenever
            I involve myself in any work.
            <br />
            <br />
            For the past 2 years, I joined Microverse where
            I worked remotely on real world projects using different technologies with
            others developers around the world. It's was great experience for me because on top
            of the technical skills , I gained various professional skills such as remote-work,
            working in a cross diverse enviroment,  Meet projects highly deadlines,
            communicate effectively.
          </p>
          <p className="text-[#76ab9e] py-2">I'm currently open for news opportunities.</p>
          <Skill />
        </div>
        <div className="flex flex-col gap-6 w-30 px-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center py-4 ">
              <h4 className="capitalize md:text-2xl"> Languages</h4>
              <FaChevronDown className="text-[#CCD6F6]" />
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex items-center justify-center gap-2 md:flex-col   bg-[#F7F7F9] py-2 px-4 rounded">
                <svg width="50px" height="50px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                  <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
                  <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
                </svg>
                <span className="font-bold text-xs text-[#000300] text-center">JavaScript </span>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 md:flex-col bg-[#F7F7F9] py-2 px-4 rounded">
                  <img src={ruby} alt="html-icon" className="h-[50px] w-[50px]" />
                  <span className="font-bold text-xs text-[#000300] text-center">ruby </span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 md:flex-col bg-[#F7F7F9] py-2 px-4 rounded">
                  <img src={css} alt="html-icon" className="h-[50px] w-[50px]" />
                  <span className="font-bold text-xs text-[#000300] text-center">css </span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 md:flex-col bg-[#F7F7F9] py-2 px-4 rounded">
                  <img src={ht} alt="html-icon" className="h-[50px] w-[50px]" />
                  <span className="font-bold text-xs text-[#000300] text-center">html </span>
                </div>
              </div>

            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="flex justify-between items-center py-4">

              <h4 className="capitalize md:text-2xl"> Framworks</h4>
              <FaChevronDown className="text-[#CCD6F6]" />
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex items-center justify-center gap-2 md:flex-col bg-[#F7F7F9]  py-2 px-4 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 128 128">
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4" />
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4z" />
                  </g>
                </svg>
                <span className="font-bold text-xs text-[#000300] text-center">React </span>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 md:flex-col bg-[#F7F7F9] py-2 px-4 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 128 128"><path fill="#764abc" d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25c3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58c-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35c2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85a62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07c-2.44-.81-6-2-8.14-2.44c-.53-8.63-7.82-30.13-25.09-29.81c-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25a59.61 59.61 0 0 0 8.47 36.16a2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z" /></svg>
                  <span className="font-bold text-xs text-[#000300] text-center">Redux </span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 md:flex-col gap-2 bg-[#F7F7F9] py-2 px-2 rounded">
                  <img src={tail} alt="html-icon" className="h-[50px] w-[60px]" />
                  <span className="font-bold text-xs text-[#000300] text-center">Tailwindcss </span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 md:flex-col gap-2 bg-[#F7F7F9] py-2 px-4 rounded">
                  <img src={rails} alt="html-icon" className="h-[50px] w-[50px]" />
                  <span className="font-bold text-xs text-[#000300] text-center">Rails </span>
                </div>
              </div>

            </div>
          </div>
          <div className="flex flex-col gap-2 py-4">
            <div className="flex justify-between py-4 ">

              <h4 className="capitalize md:text-2xl items-center"> Database </h4>
              <FaChevronDown className="text-[#CCD6F6]" />
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex items-center justify-center gap-2 md:flex-col bg-[#F7F7F9] py-2 px-2 rounded">
                <img src={postgres} alt="html-icon" className="h-[50px] w-[50px]" />
                <span className="font-bold text-xs text-[#000300] text-center">PostgreSQL </span>

              </div>
              <div>
                <div className="flex items-center justify-center gap-2 md:flex-col bg-[#F7F7F9] py-2 px-4 rounded">
                  <img src={mysql} alt="html-icon" className="h-[50px] w-[50px]" />
                  <span className="font-bold text-xs text-[#000300] text-center">MySQL </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="5rem"> </div>

    </div>
  </div>

);

export default About;

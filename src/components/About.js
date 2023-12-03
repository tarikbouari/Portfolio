/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-extraneous-dependencies */
import { GoPerson } from 'react-icons/go';
import Skill from './Skills';
import Accordionl from './AccordionL';
import Accordionf from './AccordionF';
import Accordiond from './AccordionD';

const About = () => (

  <div className="w-full mx-auto md:p-6 xl:p-1 abcss" id="about">
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
            has it
            <span className="text-[#52eeca]"> own story</span>
          </h3>
          <p className="mt-4">
            {' '}
            Hello!  my name is tarik bouari, i'm a fullstack developer and UI designer from Togo.
            I have experience building digital products for startups and businesses.
            <br />
            <br />
            My interest in web development come from my abitlity to solve problems and
            my dedication to always bring something new and original to the table.
            <br />
            <br />
            For the past 2 years, I'm part of  Microverse organization where
            I worked remotely on real world projects with
            others developers around the world. It's was great experience for me because on top
            of the technical skills , I gained soft professional skills such as remote-work,
            working in a cross diverse enviroment,  Meet projects highly deadlines,
            communicate effectively.
          </p>
          <p className="text-[#76ab9e] py-2">I'm currently open for new opportunities.</p>
          <Skill />
        </div>
        <div className="flex flex-col gap-6 w-30 px-4 cursor-pointer">
          <Accordionl titre="Language" />
          <Accordionf titre="Framwork" />
          <Accordiond titre="Database" />
        </div>
      </div>
      <div className="5rem"> </div>

    </div>
  </div>
);
export default About;

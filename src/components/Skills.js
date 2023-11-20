import React from 'react';
import {
  FaRegLightbulb, FaRegListAlt, FaGithub, FaGitSquare, FaWordpress,
} from 'react-icons/fa';
import { BiLogoNetlify } from 'react-icons/bi';
import { LuFigma } from 'react-icons/lu';
import { SiMaterialdesignicons, SiAdobephotoshop } from 'react-icons/si';

const Skill = () => (

  <div className=" md:grid grid-cols-2 gap-2 py-10 ">
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl text-[#52eeca]"> My sKills </h3>
      <div className="flex gap-4 ">
        <FaRegLightbulb className="text-[#ddeeea] text-lg w-5 h-5" />
        <p className=""> Problem solver</p>
      </div>
      <div className="flex gap-4 ">
        <FaRegListAlt className="text-[#ddeeea] text-lg w-5 h-5" />
        <p className=""> Details oriented</p>
      </div>
      <div className="flex gap-4 ">
        <SiMaterialdesignicons className="text-[#ddeeea] text-lg <w-5 h-5" />
        <p className=""> UI Design</p>
      </div>
    </div>
    <div className="py-4 md:py-0">
      <h3 className="text-2xl text-[#52eeca]">  Platform and Tools   </h3>
      <div className="flex gap-4 py-4">
        <FaGithub className="w-5 h-5" />
        <FaGitSquare className="w-5 h-5" />
        <BiLogoNetlify className="w-5 h-5" />
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="1.25rem" fill="#ddeeea" viewBox="0 0 512 116"><path d="M255.42 28.976c-19.993 0-34.408 13.039-34.408 32.597c0 19.559 16.226 32.598 36.22 32.598c12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.218 6.338-15.466 6.338c-8.674 0-16.045-4.527-18.78-11.771h50.744c.399-2.029.634-4.13.634-6.339c0-19.54-14.415-32.58-34.409-32.58Zm-17.13 26.259c2.263-7.226 8.457-11.772 17.113-11.772c8.675 0 14.869 4.546 17.114 11.772H238.29Zm212.138-26.26c-19.993 0-34.409 13.04-34.409 32.598c0 19.559 16.226 32.598 36.22 32.598c12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.217 6.338-15.465 6.338c-8.675 0-16.046-4.527-18.78-11.771H484.2c.399-2.029.634-4.13.634-6.339c0-19.54-14.415-32.58-34.408-32.58Zm-17.114 26.26c2.264-7.226 8.457-11.772 17.114-11.772c8.674 0 14.868 4.546 17.113 11.772h-34.227Zm-70.683 6.338c0 10.866 7.1 18.11 18.11 18.11c7.461 0 13.057-3.386 15.937-8.91l13.908 8.023c-5.759 9.598-16.552 15.375-29.845 15.375c-20.011 0-34.408-13.04-34.408-32.598s14.415-32.597 34.408-32.597c13.293 0 24.068 5.777 29.845 15.375l-13.908 8.023c-2.88-5.524-8.476-8.91-15.937-8.91c-10.992 0-18.11 7.243-18.11 18.11ZM512 9.055V92.36h-16.299V9.055H512ZM66.916 0l66.915 115.903H0L66.916 0Zm167.298 9.055l-50.182 86.927l-50.183-86.927h18.817l31.366 54.33l31.366-54.33h18.816Zm106.685 21.732v17.548c-1.811-.525-3.73-.887-5.795-.887c-10.522 0-18.11 7.244-18.11 18.11V92.36h-16.299V30.787h16.299v16.66c0-9.2 10.703-16.66 23.905-16.66Z" /></svg>
      </div>
      <div className="flex gap-4 py-4">
        <LuFigma className="text-[#ddeeea] text-lg <w-5 h-5" />
        <SiAdobephotoshop className="text-[#ddeeea] text-lg w-5 h-5" />
        <FaWordpress className="text-[#ddeeea] text-lg w-5 h-5" />
      </div>
    </div>
  </div>
);

export default Skill;

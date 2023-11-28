/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ProTypes from 'prop-types';
import ht from '../images/html-logo.webp';
import ruby from '../images/ruby-logo.png';
import css from '../images/css-logo.png';

const Accordionl = ({ titre }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col gap-2 accordion-section">
      <div className="flex justify-between items-center py-4 ">
        <h4 className="capitalize md:text-2xl">
          {' '}
          {titre}
        </h4>
        <FaChevronDown className="text-[#CCD6F6]" onClick={handleToggle} />
      </div>
      { isExpanded

        ? (
          <div className={`flex flex-col md:flex-row gap-2  overflow-hidden transition-all duration-300 ease-in ${isExpanded ? 'open' : 'closed'}`}>
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
        ) : (
          <div>
            <hr />
          </div>
        )}

    </div>
  );
};
Accordionl.propTypes = {
  titre: ProTypes.string.isRequired,
};
export default Accordionl;

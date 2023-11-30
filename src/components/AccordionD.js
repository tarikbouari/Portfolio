/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';
import mysql from '../images/mysql-logo.png';

import postgres from '../images/postgresql-logo.png';

const Accordiond = ({ titre }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col gap-2 py-4 accordion-section">
      <div className="flex justify-between py-4 ">

        <h4 className="capitalize md:text-2xl items-center">
          {' '}
          {titre}
          {' '}
        </h4>
        <FaChevronDown className="text-[#CCD6F6]" onClick={handleToggle} />
      </div>
      { isExpanded ? (
        <div className={`flex flex-col md:flex-row gap-2 overflow-hidden transition-all duration-300 ease-in ${isExpanded ? 'open' : 'closed'}`}>
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
      ) : (
        <div className={`transition-all duration-300 ease-in ${isExpanded ? 'closed' : 'hi'}`}>
          <hr />
        </div>
      )}

    </div>
  );
};

Accordiond.propTypes = {
  titre: PropTypes.string.isRequired,
};

export default Accordiond;

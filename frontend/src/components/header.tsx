'use client'
import React, { useEffect, useState } from 'react';
import '@/css/header.css';
import * as HeaderParams from '@/params/header_params';
import { TextButton, PrimaryButton, DefaultButton, LinkButton } from '@/utils/button';
import FlipCountdown from '@/utils/countdown';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-flex-container header-left-side">
        <div className="text-container">
          <span className="header-title">
            {HeaderParams.topic}<br />
            {HeaderParams.description}
          </span>
        </div>
      </div>
      <div className='header-flex-container header-center'>
      <FlipCountdown />
      </div>
      <div className='header-right-side'>
      <div className='retract' onClick={toggleMenu}> ... </div>
      <div className={`header-button ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className='header-button-1'>{TextButton({buttonName: HeaderParams.button1_TH,url: HeaderParams.button1_URL})}</div>
        <div className='header-button-2'>{TextButton({buttonName: HeaderParams.button2_TH,url: HeaderParams.button2_URL})}</div>
        <div className='header-button-3'>{TextButton({buttonName: HeaderParams.button3_TH,url: HeaderParams.button3_URL})}</div>
        <div className='header-button-4'>{TextButton({buttonName: HeaderParams.button4_TH,url: HeaderParams.button4_URL})}</div>
        <div className='header-button-5'>{TextButton({buttonName: HeaderParams.button5_TH,url: HeaderParams.CREDIT_PATH})}</div>
      </div>
      </div>
    </header>
  );
};

export default Header;
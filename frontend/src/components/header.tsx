'use client'
import React, { useState } from 'react';
import '@/css/header.css';
import * as HeaderParams from '@/params/header_params';
import { TextButton, TextNoLinkButton } from '@/utils/button';


const Header: React.FC<{wishCount: number}> = ({ wishCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`} style={{backgroundColor: HeaderParams.HEADER_COLOR, color: HeaderParams.HEADER_TEXT_COLOR}}>
      <div className="header-flex-container header-left-side" style={{userSelect: 'none'}}>
        <div className="text-container">
          <span className="header-title">
            {HeaderParams.TOPIC}<br />
            {HeaderParams.DESC}
          </span>
        </div>
      </div>
      <div className='header-flex-container header-center' style={{userSelect: 'none'}}>
        <p style={{fontSize: 24}}>มีคำอวยพรแล้วทั้งหมด {wishCount} คำอวยพร</p>
      </div>
      <div className='header-right-side'>
      <div className='retract' onClick={toggleMenu}> ... </div>
      <div className={`header-button ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className='header-button-1'>{TextButton({buttonName: HeaderParams.BUTTON1_TH,url: HeaderParams.BUTTON1_URL})}</div>
        <div className='header-button-2'>{TextButton({buttonName: HeaderParams.BUTTON2_TH,url: HeaderParams.BUTTON2_URL})}</div>
        <div className='header-button-3'>{TextButton({buttonName: HeaderParams.BUTTON3_TH,url: HeaderParams.BUTTON3_URL})}</div>
        <div className='header-button-4'>{TextButton({buttonName: HeaderParams.BUTTON4_TH,url: HeaderParams.BUTTON4_URL})}</div>
        <div className='header-button-5'>{TextNoLinkButton({buttonName: HeaderParams.BUTTON5_TH})}</div>
      </div>
      </div>
    </header>
  );
};

export default Header;
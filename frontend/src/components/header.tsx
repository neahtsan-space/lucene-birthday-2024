'use client'
import React from 'react';
import '@/css/header.css';
import * as HeaderParams from '@/params/header_params';
import { TextButton, PrimaryButton, DefaultButton, LinkButton } from '@/utils/button';


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left-side">
        <div className="text-container">
          <span className="line">{HeaderParams.topic}<br />{HeaderParams.description}</span>
        </div>
      </div>
      <div className="header-button">
        <div className='header-button-1'>{TextButton({buttonName: HeaderParams.button1_TH,url: HeaderParams.button1_URL})}</div>
        <div className='header-button-2'>{TextButton({buttonName: HeaderParams.button2_TH,url: HeaderParams.button2_URL})}</div>
        <div className='header-button-3'>{TextButton({buttonName: HeaderParams.button3_TH,url: HeaderParams.button3_URL})}</div>
        <div className='header-button-4'>{TextButton({buttonName: HeaderParams.button4_TH,url: HeaderParams.button4_URL})}</div>
        <div className='header-button-5'>{TextButton({buttonName: HeaderParams.button5_TH,url: HeaderParams.button5_URL})}</div>
      </div>
    </header>
  );
};

export default Header;
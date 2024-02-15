'use client'
import React from 'react';
import '@/css/header2.css';
import * as HeaderParams from '@/params/header_params';


const Header2: React.FC = () => {
    return (
      <header className="header2">
        <a href="../" className="header-left-side2 ">
          <div className="text-container2 ">
            <p className="header-title2 ">
              {HeaderParams.go_back_title}
            </p>
          </div>
        </a>
        <div className="header-right-side2 ">
        <span className="flowing-text animated-text">
            {HeaderParams.dashing_text}
        </span>
        </div>
      </header>
    );
  };
  
  export default Header2;

/*{HeaderParams.go_back_desc}*/
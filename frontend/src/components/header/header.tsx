import React from 'react';
import '@/css/header.css';
import { topic,button_ALL_TH ,button_ALL_EN ,button1_TH, button2_TH, button3_TH, button4_TH, button5_TH,button1_EN, button2_EN, button3_EN, button4_EN, button5_EN,button_TH,button_EN} from '@/params/header_params';


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="left-side">
        <input type="text" placeholder={topic} className="textbox" />
      </div>
      <div className="right-side">
        <a href="/page1">{button1_EN}</a>
        <a href="/page2">{button2_EN}</a>
        <a href="/page3">{button3_EN}</a>
        <a href="/page4">{button4_EN}</a>
        <a href="/page5">{button5_EN}</a>
      </div>
    </header>
  );
};

export default Header;
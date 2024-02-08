import React from 'react';
import '@/css/header.css';
import { topic,button_ALL_TH ,button_ALL_EN ,button1_TH, button2_TH, button3_TH, button4_TH, button5_TH,button1_EN, button2_EN, button3_EN, button4_EN, button5_EN,button_TH,button_EN} from '@/params/header_params';


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="left-side">
        <div className="text-container">
          <span className="line">First line of text<br />Second line of text</span>
        </div>
      </div>
      <div className="right-side">
        <a href="/page1">Button 1</a>
        <a href="/page2">Button 2</a>
        <a href="/page3">Button 3</a>
        <a href="/page4">Button 4</a>
        <a href="/page5">Button 5</a>
      </div>
    </header>
  );
};

export default Header;
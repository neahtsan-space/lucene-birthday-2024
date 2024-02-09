import React from 'react';
import '@/css/footer.css';
import * as FooterParams from '@/params/footer_params';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <div className='.footer-text-container'>      
        <a href={FooterParams.imglink1_URL} className="image-link">
        <img src={FooterParams.imgsrc1} className="custom-img" alt="Discord" /></a>
        <a href={FooterParams.imglink2_URL} className="image-link">
        <img src={FooterParams.imgsrc2} className="custom-img" alt="Discord" /></a>
        <a href={FooterParams.imglink3_URL} className="image-link">
        <img src={FooterParams.imgsrc3} className="custom-img" alt="Discord" /></a>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;

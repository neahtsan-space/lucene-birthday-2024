import React from 'react';
import '@/css/footer.css';
import * as FooterParams from '@/params/footer_params';
import Image from "next/image";


const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <div className='footer-text-container'>      
          <a href={FooterParams.imglink1_URL} target='_blank' className="discord" style={{userSelect: 'none'}}>
            <Image src={FooterParams.imgsrc1} width={40} height={40} className="custom-img" alt="Discord" /></a>
            <p className='footer-discord-name'>{FooterParams.DISCORD_NAME}</p>
          <p className='footer-follow-talent'>{FooterParams.FOLLOW}
            <span className="footer-name-underline">{FooterParams.TALENT_NAME}</span>
            {FooterParams.FOLLOW_END}
          </p>
          <a href={FooterParams.imglink2_URL} target='_blank' className="youtube" style={{userSelect: 'none'}}>
            <Image src={FooterParams.imgsrc2} width={40} height={40} className="custom-img" alt="Youtube" /></a>
          <a href={FooterParams.imglink3_URL} target='_blank' className="x_twitter" style={{userSelect: 'none'}}>
            <Image src={FooterParams.imgsrc3} width={40} height={40} className="custom-img" alt="X" /></a>
          <a href={FooterParams.imglink4_URL} target='_blank' className="facebook" style={{userSelect: 'none'}}>
            <Image src={FooterParams.imgsrc4} width={40} height={40} className="custom-img" alt="Facebook" /></a>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;

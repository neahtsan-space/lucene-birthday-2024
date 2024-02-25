import React from 'react';
import '@/css/footer.css';
import * as FooterParams from '@/params/footer_params';
import Image from "next/image";


const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer" style={{backgroundColor:FooterParams.FOOTER_COLOR}}>
        <div className='footer-text-container'>      
          <a href={FooterParams.IMGLINK1_URL} target='_blank' className="discord" style={{userSelect: 'none'}}>
            <Image src={FooterParams.IMG_SRC1} width={40} height={40} className="custom-img" alt="Discord" /></a>
            <p className='footer-discord-name' style={{fontSize:FooterParams.FOOTER_FONT_SIZE}}>{FooterParams.DISCORD_NAME}</p>
          <p className='footer-follow-talent' style={{fontSize:FooterParams.FOOTER_FONT_SIZE}}>{FooterParams.FOLLOW}
            <span className="footer-name-underline" style={{fontSize:FooterParams.FOOTER_FONT_SIZE}}>{FooterParams.TALENT_NAME}</span>
            {FooterParams.FOLLOW_END}
          </p>
          <a href={FooterParams.IMGLINK2_URL} target='_blank' className="youtube" style={{userSelect: 'none'}}>
            <Image src={FooterParams.IMG_SRC2} width={40} height={40} className="custom-img" alt="Youtube" /></a>
          <a href={FooterParams.IMGLINK3_URL} target='_blank' className="x_twitter" style={{userSelect: 'none'}}>
            <Image src={FooterParams.IMG_SRC3} width={40} height={40} className="custom-img" alt="X" /></a>
          <a href={FooterParams.IMGLINK4_URL} target='_blank' className="facebook" style={{userSelect: 'none'}}>
            <Image src={FooterParams.IMG_SRC4} width={40} height={40} className="custom-img" alt="Facebook" /></a>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;

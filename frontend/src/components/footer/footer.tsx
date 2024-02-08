import React from 'react';
import '@/css/footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <div>
        <p>This is the footer.</p>
        </div>
        <a href="/page1">Button 1</a>
        <a href="/page2">Button 2</a>
        <a href="/page3">Button 3</a>
        <a href="/page4">Button 4</a>
        <a href="/page5">Button 5</a>
        </div>
    </footer>
  );
};

export default Footer;

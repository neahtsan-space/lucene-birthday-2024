import React, { useRef, useState } from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import '@/css/carousel.css';
import { dashboardImages, DASHBOARD_TITLE } from '@/params/dashboard_param';
import { DASHBOARD_BG, DASHBOARD_DESC_BG, DASHBOARD_TITLE_BG } from '@/params/background_params';



// test dashboard carousel

const DashboardCarousel: React.FC = () => {

  const [currentDescription, setCurrentDescription] = useState('');
  const carouselRef = useRef<any>(null);

  const goToNextSlide = () => carouselRef.current?.next();
  const goToPrevSlide = () => carouselRef.current?.prev();

  useState(() => {
    setCurrentDescription(dashboardImages[0].description);
  });

  const handleAfterChange = (currentSlide: number) => {
    setCurrentDescription(dashboardImages[currentSlide].description);
  };
  
  const imageStyle: React.CSSProperties = {
    width: 'auto',
    height: 'auto',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: 'auto',
    maxHeight: '45vh',
    backgroundColor: DASHBOARD_BG,
  };

  return (
    <div style={{backgroundColor: DASHBOARD_BG}}>
      <div className="carousel-description" style={{backgroundColor: DASHBOARD_TITLE_BG}}>{DASHBOARD_TITLE}</div>
      <Carousel autoplay ref={carouselRef} afterChange={handleAfterChange} className="carousel">
        {dashboardImages.map((image, index) => (
          <div key={index} className="carousel-container" style={imageStyle}>
            <Image src={image.src} alt={image.alt} width={0} height={0} sizes="100vw" style={imageStyle} 
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}/>
          </div>
        ))}
      </Carousel>
      <Button type="text" onClick={goToPrevSlide} style={{ position: 'absolute', top: '39vh', left: '10vh', zIndex: 2, transform: 'translateY(-50%)' }}>
          <LeftOutlined style={{ fontSize: '2rem', color: 'white' }} />
      </Button>
      <Button type="text" onClick={goToNextSlide} style={{ position: 'absolute', top: '39vh', right: '110vh', zIndex: 2, transform: 'translateY(-50%)' }}>
          <RightOutlined style={{ fontSize: '2rem', color: 'white' }} />
      </Button>
      <div className="carousel-description" style={{backgroundColor: DASHBOARD_DESC_BG}}>{currentDescription}</div>
    </div>
  );
};

export default DashboardCarousel;
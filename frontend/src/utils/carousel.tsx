import React, { useRef, useState } from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import '@/css/carousel.css';
import { 
  DASHBOARD_IMG_1, DASHBOARD_IMG_1_DESC,
  DASHBOARD_IMG_2, DASHBOARD_IMG_2_DESC,
  DASHBOARD_IMG_3, DASHBOARD_IMG_3_DESC,
  DASHBOARD_IMG_4, DASHBOARD_IMG_4_DESC,
  DASHBOARD_IMG_5, DASHBOARD_IMG_5_DESC,
} from '@/params/dashboard_param';



// test dashboard carousel

const DashboardCarousel: React.FC = () => {

  const [currentDescription, setCurrentDescription] = useState('');

  const images = [
    { src: DASHBOARD_IMG_1, alt: "Image 1", description: DASHBOARD_IMG_1_DESC },
    { src: DASHBOARD_IMG_2, alt: "Image 2", description: DASHBOARD_IMG_2_DESC },
    { src: DASHBOARD_IMG_5, alt: "Image 3", description: DASHBOARD_IMG_3_DESC },
    { src: DASHBOARD_IMG_4, alt: "Image 4", description: DASHBOARD_IMG_4_DESC },
  ];

  const carouselRef = useRef<any>(null);

  const goToNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  const goToPrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  useState(() => {
    setCurrentDescription(images[0].description);
  });

  const handleAfterChange = (currentSlide: number) => {
    setCurrentDescription(images[currentSlide].description);
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
  };

  return (
    <div>
      <Carousel autoplay ref={carouselRef} afterChange={handleAfterChange} className="carousel">
        {images.map((image, index) => (
          <div key={index} className="carousel-container" style={imageStyle}>
            <Image src={image.src} alt={image.alt} width={0} height={0} sizes="100vw" style={imageStyle}/>
          </div>
        ))}
      </Carousel>
      <Button type="text" onClick={goToPrevSlide} style={{ position: 'absolute', top: '30%', left: '5%', zIndex: 2, transform: 'translateY(-50%)' }}>
          <LeftOutlined style={{ fontSize: '2rem', color: 'white' }} />
      </Button>
      <Button type="text" onClick={goToNextSlide} style={{ position: 'absolute', top: '30%', right: '55%', zIndex: 2, transform: 'translateY(-50%)' }}>
          <RightOutlined style={{ fontSize: '2rem', color: 'white' }} />
      </Button>
      <div className="carousel-description">{currentDescription}</div>
    </div>
  );
};

export default DashboardCarousel;
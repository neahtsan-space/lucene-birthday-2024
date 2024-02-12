import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import 'swiper/css/effect-fade';
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules';
import '@/css/carousel.css';
import { dashboardImages, DASHBOARD_TITLE } from '@/params/dashboard_param';
import { DASHBOARD_BG, DASHBOARD_DESC_BG, DASHBOARD_TITLE_BG } from '@/params/background_params';

const DashboardCarousel: React.FC = () => {
  const [currentDescription, setCurrentDescription] = useState('');

  useEffect(() => {
    setCurrentDescription(dashboardImages[0].description);
  }, []);

  const handleAfterChange = (swiper: any) => {
    setCurrentDescription(dashboardImages[swiper.realIndex].description);
  };

  return (
    <div>
      <div style={{backgroundColor: DASHBOARD_TITLE_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2.5vw'}}>{DASHBOARD_TITLE}</div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'progressbar',
          clickable: true,
        }}
        navigation={true} 
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        className="mySwiper"
        onSlideChange={handleAfterChange}
      >
        {dashboardImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div style={{
              position: 'relative',
              width: '50vw',
              height: '25vw',
              backgroundColor: DASHBOARD_BG
            }}>
              <Image
                src={image.src}
                alt={image.alt}
                layout='fill'
                objectFit='contain'
                sizes='(max-width: 600px) 100vw, (max-width: 1024px) 25vw, 1024px'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ backgroundColor: DASHBOARD_DESC_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2.5vw' }}>
        {currentDescription}
      </div>
    </div>
  );
};

export default DashboardCarousel;

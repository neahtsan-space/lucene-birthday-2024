import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import 'swiper/css/effect-fade';
import { Pagination, Navigation, EffectFade, Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import '@/css/carousel.css';
import { dashboardImages, DASHBOARD_TITLE } from '@/params/dashboard_param';
import { DASHBOARD_BG, DASHBOARD_DESC_BG, DASHBOARD_TITLE_BG } from '@/params/background_params';

const DashboardCarousel: React.FC = () => {
  const [currentDescription, setCurrentDescription] = useState<string>('');
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  useEffect(() => {
    setCurrentDescription(dashboardImages[0].description);
  }, []);

  const handleAfterChange = (swiper: any) => {
    setCurrentDescription(dashboardImages[swiper.realIndex].description);
  };

  return (
    <div style={{backgroundColor: DASHBOARD_BG}}>
      <div className='dashboard-title' style={{ backgroundColor: DASHBOARD_TITLE_BG}}>{DASHBOARD_TITLE}</div>
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
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
        modules={[Pagination, Navigation, EffectFade, Autoplay, FreeMode, Thumbs]}
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
      <div style={{ marginTop: '20px' }}> 
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="myThumbsSwiper"
        >
          {dashboardImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div style={{
                position: 'relative',
                height: '5.625vw',
                backgroundColor: DASHBOARD_BG,
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
              }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='dashboard-description' style={{ backgroundColor: DASHBOARD_DESC_BG}}>
        {currentDescription}
      </div>
    </div>
  );
};


export default DashboardCarousel;

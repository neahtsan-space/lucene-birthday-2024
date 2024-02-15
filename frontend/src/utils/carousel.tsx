import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import 'swiper/css/effect-fade';
import { Pagination, Navigation, EffectFade, Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import '@/css/carousel.css';
import { dashboardImages, DASHBOARD_TITLE, DASHBOARD_NAVIGATION_COLOR, DASHBOARD_PAGINATION_COLOR, EMOJI_DASHBOARD_TITLE } from '@/params/dashboard_param';
import { DASHBOARD_BG, DASHBOARD_DESC_BG, DASHBOARD_TITLE_BG } from '@/params/background_params';
import '@/css/dashboard.css';
const DashboardCarousel: React.FC<{ showThumbs: boolean }> = ({ showThumbs }) => {
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
      <div className='dashboard-title' style={{ backgroundColor: DASHBOARD_TITLE_BG}}>{DASHBOARD_TITLE} {EMOJI_DASHBOARD_TITLE}</div>
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
          type: 'bullets',
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade, Autoplay, FreeMode, Thumbs]}
        className="mySwiper"
        onSlideChange={handleAfterChange}
        style={{
          "--swiper-navigation-color": {DASHBOARD_NAVIGATION_COLOR},
          "--swiper-pagination-color": {DASHBOARD_PAGINATION_COLOR},
        } as React.CSSProperties }
      >
        {dashboardImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='carousel-picture'
            style={{
              position: 'relative',
              width: '100%',
              backgroundColor: DASHBOARD_BG,
              minWidth: '25vw',
            }}>
              <Image
                src={image.src}
                alt={image.alt}
                layout='fill'
                objectFit='contain'
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showThumbs && (
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
      )}
      <div className='dashboard-description' style={{ backgroundColor: DASHBOARD_DESC_BG}}>
        {currentDescription}
      </div>
    </div>
  );
};


export default DashboardCarousel;

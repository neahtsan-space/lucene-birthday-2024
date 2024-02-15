'use client'
import React from 'react';
import '@/css/dashboard.css';
import DashboardCarousel from '@/utils/carousel';
import { ENABLE_CAROUSEL_THUMBS } from '@/params/dashboard_param';

const DashBoard: React.FC = () => {
  return (
    <div className="dashboard">
        <DashboardCarousel showThumbs={ENABLE_CAROUSEL_THUMBS} />
    </div>
  );
};

export default DashBoard;
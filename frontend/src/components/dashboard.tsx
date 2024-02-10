'use client'
import React from 'react';
import '@/css/dashboard.css';
import DashboardCarousel from '@/utils/carousel';


const DashBoard: React.FC = () => {
  return (
    <div className="dashboard">
        <DashboardCarousel />
    </div>
  );
};

export default DashBoard;
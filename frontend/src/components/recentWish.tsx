'use client'
import React, { useEffect, useState } from 'react';
import '@/css/recentWish.css';
import { WishCardTemplate } from '@/utils/card';
import { GetLastestFourWish } from '../../api/api';
import { IWishCardDB } from '@/interfaces/IWishcard';

const RecentWish: React.FC = () => {

  const [wishData, setWishData] = useState<IWishCardDB[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetLastestFourWish();
      setWishData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="recent-wish-container">
      <div className="wish-card">
      {wishData.map((wish, index) => (
          <WishCardTemplate key={index} wishCard={wish} allWishes={wishData} currentIndex={index} />
      ))}
      </div>
    </div>
  );
};

export default RecentWish;
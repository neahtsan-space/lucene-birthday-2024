'use client'
import React, { useEffect, useState } from 'react';
import '@/css/recentWish.css';
import { WishCardTemplate } from '@/utils/card';
import { GetWishData } from '../../api/api';
import { IWishCardDB } from '@/interfaces/IWishcard';

const RecentWish: React.FC = () => {

  const [wishData, setWishData] = useState<IWishCardDB[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetWishData();
      setWishData(data);
    };

    fetchData();
  }, []);

  const lastFourWishes = wishData.slice(-4).reverse();

  return (
    <div className="recent-wish-container">
      <div className="wish-card">
      {lastFourWishes.map((wish, index) => (
          <WishCardTemplate key={index} wishCard={wish} allWishes={lastFourWishes} currentIndex={index} />
      ))}
      </div>
    </div>
  );
};

export default RecentWish;
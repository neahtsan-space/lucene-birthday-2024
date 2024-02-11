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
    <div className="recent-wish-container" 
    style={{backgroundImage: 'url(lc_bg3.jpg)', backgroundSize: 'cover',backgroundPositionX:'center',backgroundPositionY:'center',backgroundRepeat: 'no-repeat',}}>
      <div className="wish-card">
      {wishData.map((wish, index) => (
          <WishCardTemplate key={index} wishCard={wish} allWishes={wishData} currentIndex={index} />
      ))}
      </div>
    </div>
  );
};

export default RecentWish;
'use client'
import React, { useEffect, useState } from 'react';
import '@/css/recentWish.css';
import { WishCardTemplate } from '@/utils/card';
import { GetLastestFourWish } from '../../api/api';
import { IWishCard } from '@/interfaces/IWishcard';
import * as BACKGROUND_COLOR from '@/params/background_params';

const RecentWish: React.FC = () => {

  const [wishData, setWishData] = useState<IWishCard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetLastestFourWish();
      setWishData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="recent-wish-container" 
    style={{backgroundColor: BACKGROUND_COLOR.RECENT_WISH_BG, backgroundSize: 'cover',backgroundPositionX:'center',backgroundPositionY:'center',backgroundRepeat: 'no-repeat',}}>
      <div className="wish-card">
      {wishData.map((wish, index) => (
          <WishCardTemplate key={index} wishCard={wish} allWishes={wishData} currentIndex={index} />
      ))}
      </div>
    </div>
  );
};

export default RecentWish;
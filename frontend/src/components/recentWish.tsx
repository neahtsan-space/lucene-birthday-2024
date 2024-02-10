'use client'
import React, { ReactNode } from 'react';
import '@/css/recentWish.css';
import { pictureToSticker, stickerToPicture } from '@/utils/wishMapper';
import WishCardTemplate from '@/utils/card';
import { 
  STICKER_1,
  STICKER_2,
  STICKER_3,
  STICKER_4,
  STICKER_5,
  STICKER_6,
  STICKER_7,
  STICKER_8 } from '../params/card_params';
import { mock_data } from '../params/mockdata_params';


const RecentWish: React.FC = () => {

  const lastFourWishes = mock_data.slice(-4).reverse();

  return (
    <div className="recent-wish-container"> {/* Apply container class */}
      <div className="wish-card"> {/* Apply wish card class */}
      {lastFourWishes.map((wish, index) => (
          <WishCardTemplate key={index} wishCard={wish} allWishes={lastFourWishes} currentIndex={index} />
      ))}
      </div>
    </div>
  );
};

export default RecentWish;
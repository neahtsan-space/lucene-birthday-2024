'use client'
import React, { ReactNode } from 'react';
import '@/css/recentWish.css';
import wishCardTemplate from '@/utils/card';
import { pictureToSticker, stickerToPicture } from '@/utils/wishMapper';
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
  return (
    <div className="recent-wish-container"> {/* Apply container class */}
      <div className="wish-card"> {/* Apply wish card class */}
        {wishCardTemplate({wishCard: mock_data[0]})}
      </div>
      <p className="picture"> {/* Apply picture class */}
        {pictureToSticker(mock_data[0].picture) as ReactNode}
      </p>
      <p className="sticker"> {/* Apply sticker class */}
        {stickerToPicture([STICKER_5, STICKER_3])}
      </p>
    </div>
  );
};

export default RecentWish;
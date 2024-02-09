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


const mock_data = [
  {
      "_id": "65bfe6c579c59ae90170b0e2",
      "name": "neaht",
      "wish": "แฮปๆนะจ๊ะสาวน้อย",
      "time": "05 Feb 2024 02:34 GMT+7",
      "picture": "1",
      "cardNumber": 1,
      "__v": 0
  },
  {
      "_id": "65c3e36518f1fa737a5f4038",
      "name": "neaht3",
      "wish": "แฮปๆนะจ๊ะสาวน้อย ๆ ๆ ๆ ๆ ๆ",
      "time": "08 Feb 2024 03:09 GMT+7",
      "picture": "1",
      "cardNumber": 2,
      "__v": 0
  },
  {
      "_id": "65c3e36a18f1fa737a5f403c",
      "name": "neaht4",
      "wish": "แฮปๆนะจ๊ะสาวน้อย ๆ ๆ ๆ ๆ ๆ",
      "time": "08 Feb 2024 03:09 GMT+7",
      "picture": "1",
      "cardNumber": 3,
      "__v": 0
  }
]

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
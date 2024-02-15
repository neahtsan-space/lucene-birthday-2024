import React from 'react';
import '@/css/header.css'; // Assuming this contains your CSS styles
import { WishCardTemplate } from '@/utils/card';
import { IWishCard } from '@/interfaces/IWishcard';
import { VIEWALLWISH_BG } from '@/params/background_params';
import '../view-all-wishcard/cardtable.css';

interface CardTableProps {
  data: IWishCard[];
}

const CardTable: React.FC<CardTableProps> = ({ data }) => {

  return (
    <div className="card-grid" style={{
      backgroundColor: VIEWALLWISH_BG,
    }}>
      {data.map((wishCard: IWishCard, index: number) => (
        <div className="class-grid-item" key={index} style={{
        }}>
          <WishCardTemplate wishCard={wishCard} allWishes={data} currentIndex={index} />
        </div>
      ))}
    </div>
  );
};

export default CardTable;

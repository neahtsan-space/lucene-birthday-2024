import React from 'react';
import '@/css/header.css'; // Assuming this contains your CSS styles
import { WishCardTemplate } from '@/utils/card';
import { IWishCardDB } from '@/interfaces/IWishcard';
import { VIEWALLWISH_BG } from '@/params/background_params';

interface CardTableProps {
  data: IWishCardDB[];
}

const CardTable: React.FC<CardTableProps> = ({ data }) => {

  return (
    <div className="card-grid" style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
      margin: '0 auto',
      padding: '3%',
      backgroundColor: VIEWALLWISH_BG,
    }}>
      {data.map((wishCard: IWishCardDB, index: number) => (
        <div key={index} style={{
          flex: '1 1 calc(25% - 32px)', 
          maxWidth: 'calc(25% - 32px)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
        }}>
          <WishCardTemplate wishCard={wishCard} allWishes={data} currentIndex={index} />
        </div>
      ))}
    </div>
  );
};

export default CardTable;

import React from 'react';
import '@/css/header.css'; // Assuming this contains your CSS styles
import { WishCardTemplate } from '@/utils/card';
import { IWishCardDB } from '@/interfaces/IWishcard';

interface CardTableProps {
  data: IWishCardDB[];
}

const CardTable: React.FC<CardTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No wish cards available.</div>;
  }

  // Adjusted flexbox grid layout for cards
  return (
    <div className="card-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', margin: '-16px', backgroundColor: 'white' }}>
      {data.map((wishCard: IWishCardDB, index: number) => (
        <div key={index} style={{ flex: '1 1 calc(25% - 32px)', maxWidth: 'calc(25% - 32px)' }}> {/* Adjust the card container */}
          <WishCardTemplate wishCard={wishCard} allWishes={data} currentIndex={index} />
        </div>
      ))}
    </div>
  );
};

export default CardTable;


import React, { useEffect, useState } from 'react';
import CardTable from "@/app/view-all-wishcard/cardtable";
import { GetWishData } from '../../api/api';
import { IWishCard } from '@/interfaces/IWishcard';

const WishTable: React.FC = async () => {
  const [wishData, setWishData] = useState<IWishCard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetWishData();
      setWishData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='Table' ></div>
      <CardTable data={wishData} />
    </div>
  );
};

export default WishTable;

import React, { useEffect, useState } from 'react';
import CardTable from "@/app/view-all-wishcard/cardtable";
import { GetWishData } from '@/api/api';
import { IWishCardDB } from '@/interfaces/IWishcard';

const WishTable: React.FC = () => {
  const [wishData, setWishData] = useState<IWishCardDB[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetWishData();
      setWishData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Card Table</h1>
      <CardTable data={wishData} />
    </div>
  );
};

export default WishTable;

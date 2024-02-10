import React from 'react';
import '@/css/header.css';
import { Table } from 'antd';
import WishCardTemplate from '@/utils/card';
import { IWishCardDB } from '@/interfaces/IWishcard';

interface CardTableProps {
  data: IWishCardDB[];
}

const CardTable: React.FC<CardTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No wish cards available.</div>;
  }
  
  const numRows = Math.ceil(data.length / 4);

  const columns = Array.from({ length: 4 }).map((_, index) => ({
    title: `Column ${index + 1}`,
    key: `column${index + 1}`,
    render: (_: any, record: any) => (
      <div className="card-container">
        {record[`row${index + 1}`] && record[`row${index + 1}`].map((wishCard: IWishCardDB, idx: number) => (
          <WishCardTemplate key={idx} wishCard={wishCard} allWishes={data} currentIndex={idx} />
        ))}
      </div>
    ),
  }));
  
  const dataSource = Array.from({ length: numRows }).map((_, index) => {
    const startIdx = index * 4;
    const rowData = data.slice(startIdx, startIdx + 4);
    return {
      key: index,
      ...rowData.reduce((acc, cur, i) => ({ ...acc, [`row${i + 1}`]: [cur] }), {}),
    };
  });

  return (
    <Table columns={columns} dataSource={dataSource} pagination={false} bordered />
  );
};

export default CardTable;

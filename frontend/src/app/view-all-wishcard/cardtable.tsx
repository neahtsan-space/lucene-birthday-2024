import React from 'react';
import '@/css/header.css';
import { Table } from 'antd';
import WishCardTemplate from '@/utils/card'; // Import wishCardTemplate component
import wishCard from '@/interfaces/IWishcard'; // Assuming you have defined IWishCard interface
import { mock_data } from '@/params/mockdata_params'; // Import mock data

interface CardTableProps {
  data: typeof mock_data; // Replace with your actual data type
}

const CardTable: React.FC<CardTableProps> = ({ data: tableData }) => {
  if (!mock_data || mock_data.length === 0) {
    return <div>No wish cards available.</div>;
  }
  
  const numRows = Math.ceil(mock_data.length / 4);

  const columns = Array.from({ length: 4 }).map((_, index) => ({
    title: `Row ${index + 1}`,
    dataIndex: `row${index + 1}`,
    render: (_: any, record: any) => (
      <div className="card-container">
        {/* Check if record[`row${index + 1}`] is defined before mapping */}
        {record[`row${index + 1}`] && record[`row${index + 1}`].map((wishCard: wishCard, idx: number) => (
          <div key={idx} className="card">
            <WishCardTemplate wishCard={wishCard} />
          </div>
        ))}
      </div>
    ),
  }));
  
  const data = Array.from({ length: numRows }).map((_, index) => {
    const startIdx = index * 4;
    const endIdx = startIdx + 4;
    const rowData = mock_data.slice(startIdx, endIdx);
    return {
      key: index,
      ...rowData.reduce((acc, cur, i) => ({ ...acc, [`row${i + 1}`]: [cur] }), {}),
    };
  });

  return (
    <div className="card-container">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default CardTable;
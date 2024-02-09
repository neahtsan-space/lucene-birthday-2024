import React from 'react';
import { Table } from 'antd';

const CardTable: React.FC<{ cards: string[] }> = ({ cards }) => {
  const columns = [
    {
      title: 'Cards',
      dataIndex: 'cards',
      render: (_: string, __: any, index: number) => (
        <div style={{ display: 'flex' }}>
          {cards.slice(index * 4, index * 4 + 4).map((card, idx) => (
            <div key={idx} style={{ marginRight: '20px' }}>
              <p>{card}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const data = Array.from({ length: Math.ceil(cards.length / 4) }).map((_, index) => ({
    key: index,
    cards: '',
  }));

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default CardTable;
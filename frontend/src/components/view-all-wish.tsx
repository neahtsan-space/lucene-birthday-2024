import React from 'react';
import CardTable from "@/app/view-all-wishcard/cardtable";



const WishTable: React.FC = () => {

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

    return (
      <div>
        <h1>Card Table</h1>
        <CardTable data={mock_data} />
      </div>
    );
};

export default WishTable;
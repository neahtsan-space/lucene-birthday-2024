import React from 'react';
import CardTable from "@/app/view-all-wishcard/cardtable";
import { mock_data } from "@/params/mockdata_params";


const WishTable: React.FC = () => {

    return (
      <div>
        <h1>Card Table</h1>
        <CardTable data={mock_data} />
      </div>
    );
};

export default WishTable;
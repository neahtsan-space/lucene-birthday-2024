'use client'
import React from 'react';
import '@/css/header.css';
import * as WishCommandParams from '@/params/createWish_params';
import CreateWishCardButton from '@/utils/create-wish-button';
import { Divider } from 'antd';


const WishCommand: React.FC = () => {
  return (
    <div className='wish-command-container'>
        <p>{WishCommandParams.WISHCOMMAND_TITLE}</p>
        <Divider />
        <div className='wish-command-button-container'>
            <CreateWishCardButton />
        </div>
    </div>
  );
};

export default WishCommand;
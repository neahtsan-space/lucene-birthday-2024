'use client'
import React from 'react';
import '@/css/header.css';
import * as WishCommandParams from '@/params/wishCommand_params';
import CreateWishCardButton from '@/utils/create-wish-button';
import { DefaultButton } from '@/utils/button';
import { SearchWishCardButton } from '@/utils/search-wish-button';
import { Divider } from 'antd';


const WishCommand: React.FC = () => {
  return (
    <div className='wish-command-container'>
        <p>{WishCommandParams.WISHCOMMAND_TITLE}</p>
        <Divider />
        <div className='wish-command-button-container'>
            <CreateWishCardButton />
            <DefaultButton buttonName={WishCommandParams.VIEW_ALL_WISHCARD_BUTTON_NAME} url={WishCommandParams.VIEW_ALL_WISHCARD_PATH} />
            <SearchWishCardButton />
        </div>
    </div>
  );
};

export default WishCommand;
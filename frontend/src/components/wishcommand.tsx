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
    <div className='wish-command-container' style={{width: '100%', marginLeft: '25%', marginRight:'20%'}}>
        <p style={{ width:'100%',fontSize: '8vh', padding:'5vh',paddingBottom:'3vh', color: WishCommandParams.WISHCOMMAND_TITLE_COLOR}}>{WishCommandParams.WISHCOMMAND_TITLE}</p>
        <Divider style={{borderColor: 'turquoise', borderWidth: '0.3vw',padding:'2vh', margin: '10px 0',paddingLeft:'5vh' }}/>
        <div className='wish-command-button-container' style={{ display: 'flex', gap: '10%', flexDirection: 'row'}}>
            <div><CreateWishCardButton /></div>
            <div><DefaultButton buttonName={WishCommandParams.VIEW_ALL_WISHCARD_BUTTON_NAME} url={WishCommandParams.VIEW_ALL_WISHCARD_PATH} /></div>
            <div><SearchWishCardButton /></div>
        </div>
    </div>
  );
};

export default WishCommand;




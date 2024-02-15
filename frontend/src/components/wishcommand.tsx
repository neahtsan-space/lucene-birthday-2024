'use client'
import React from 'react';
import '@/css/header.css';
import * as WishCommandParams from '@/params/wishCommand_params';
import { EMOJI1, button5_URL } from '@/params/header_params';
import CreateWishCardButton from '@/utils/create-wish-button';
import { DefaultButton } from '@/utils/button';
import { SearchWishCardButton } from '@/utils/search-wish-button';
import { Divider } from 'antd';
import '@/css/wishcommand.css';

const WishCommand: React.FC = () => {
  return (
    <div className='wish-command-container'>
      <p className='wish-command-title'>{WishCommandParams.WISHCOMMAND_TITLE}</p>
      <Divider className='wish-command-divider' />
      <div className='wish-command-button-container'>
        <div><CreateWishCardButton /></div>
        <div><DefaultButton buttonName={WishCommandParams.VIEW_ALL_WISHCARD_BUTTON_NAME} url={WishCommandParams.VIEW_ALL_WISHCARD_PATH} /></div>
        <div><SearchWishCardButton /></div>
      </div>
      <div className='wish-command-style' style={{opacity: '0.5',fontSize: '50%',paddingTop: '10%'}}>
        <p className='wish-command-desc'>{WishCommandParams.WISHCOMMAND_DESC1}
          <a className='wish-command-over' href={button5_URL} target='_blank' style={{textDecorationLine: 'underline'}}>{WishCommandParams.WISHCOMMAND_CONTACT_NAME}</a>
        </p>
        <p className='wish-command-desc'>{WishCommandParams.WISHCOMMAND_DESC2}</p>
        <p className='wish-command-desc'>{WishCommandParams.WISHCOMMAND_DESC3} 
          <a className='wish-command-over' href={button5_URL} target='_blank' style={{textDecorationLine: 'underline'}}>{WishCommandParams.WISHCOMMAND_CONTACT_NAME2}</a>
          {EMOJI1}
        </p>
      </div>
    </div>
  );
};

export default WishCommand;




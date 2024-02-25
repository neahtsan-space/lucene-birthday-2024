'use client'
import React from 'react';
import * as WishCommandParams from '@/params/wishCommand_params';
import CreateWishCardButton from '@/utils/create-wish-button';
import { DefaultButton } from '@/utils/button';
import { SearchWishCardButton } from '@/utils/search-wish-button';
import { Divider } from 'antd';
import '@/css/wishcommand.css';
import { POPCAT_PATH } from '@/params/wishCommand_params';

const WishCommand: React.FC = () => {
  return (
    <div className='wish-command-container' >
      <p className='wish-command-title' style={{userSelect: 'none'}}>{WishCommandParams.WISHCOMMAND_TITLE}</p>
      <Divider className='wish-command-divider' />
      <div className='wish-command-button-container'>
        <div><CreateWishCardButton /></div>
        <div><DefaultButton buttonName={WishCommandParams.VIEW_ALL_WISHCARD_BUTTON_NAME} url={WishCommandParams.VIEW_ALL_WISHCARD_PATH} disable={WishCommandParams.DISABLE_VIEW_WISH} /></div>
        <div><SearchWishCardButton /></div>
      </div>
      <div className='wish-command-style' style={{opacity: '0.5',fontSize: '50%',paddingTop: '10%'}}>
        <p className='wish-command-desc'>{WishCommandParams.WISHCOMMAND_DESC1}
          <a className='wish-command-over' href={WishCommandParams.CONTACT_INFO} target='_blank' style={{textDecorationLine: 'underline'}}>{WishCommandParams.WISHCOMMAND_CONTACT_NAME}</a>
        </p>
        <br></br>
        <p className='wish-command-desc'>{WishCommandParams.WISHCOMMAND_DESC2}</p>
        <p className='wish-command-desc'>{WishCommandParams.WISHCOMMAND_DESC3} 
          <a className='wish-command-over' href={WishCommandParams.CONTACT_INFO} target='_blank' style={{textDecorationLine: 'underline'}}>{WishCommandParams.WISHCOMMAND_CONTACT_NAME2}</a>
          <a className='cat' href={POPCAT_PATH} > {WishCommandParams.EMOJI_CAT} </a>
        </p>
      </div>
    </div>
  );
};

export default WishCommand;
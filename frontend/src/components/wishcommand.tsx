'use client'
import React from 'react';
import '@/css/header.css';
import * as WishCommandParams from '@/params/wishcommand_params';
import { TextButton, PrimaryButton, DefaultButton, LinkButton } from '@/utils/button';
import { Divider } from 'antd';


const WishCommand: React.FC = () => {
  return (
    <div className='wish-command-container'>
        <p>{WishCommandParams.WISHCOMMAND_TITLE}</p>
        <Divider />
        <div className='wish-command-button-container'>
            <DefaultButton text='test default'/>
            <PrimaryButton text='test primary'/>
            <LinkButton text='test link'/>
        </div>
    </div>
  );
};

export default WishCommand;
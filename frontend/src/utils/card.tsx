import React from 'react';
import Image from 'next/image';
import IWishCard from '@/interfaces/IWishcard';
import { STICKER_6 } from '@/params/card_params';


import { Card } from 'antd';

const { Meta } = Card;

const wishCardTemplate: React.FC<{wishCard: IWishCard}> = ({wishCard}) => {
    return (
        <div>
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<Image alt="example" src={STICKER_6} width={40} height={400} sizes='100vw' />}
        >
            <Meta title={`${wishCard.name} #${wishCard.cardNumber}`} description={wishCard.wish} />
        </Card>
        </div>
    );
    }

export default wishCardTemplate;
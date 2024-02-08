import React from 'react';
import IWishCard from '@/interfaces/IWishcard';

import { Card } from 'antd';

const { Meta } = Card;

const wishCardTemplate: React.FC<{wishCard: IWishCard}> = ({wishCard}) => {
    return (
        <div>
        <Card
            hoverable
            style={{ width: 240 }}
            // cover={<img alt="example" src={wishCard.picture} />}
        >
            <Meta title={wishCard.name} description={wishCard.wish} />
        </Card>
        </div>
    );
    }

export default wishCardTemplate;
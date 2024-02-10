import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { IWishCardDB, IWishCardFront } from '@/interfaces/IWishcard';
import { mapDbToFront } from './wishMapper';
import { STICKER_7 } from '@/params/card_params';
import { Card, Modal, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { Meta } = Card;

const WishCardTemplate: React.FC<{wishCard: IWishCardDB, allWishes: IWishCardDB[], currentIndex: number}> = ({wishCard, allWishes, currentIndex}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentWishIndex, setCurrentWishIndex] = useState(currentIndex);

    const allWishesMap = mapDbToFront(allWishes);

    const currentWish = allWishesMap[currentWishIndex];

    const mappedWishCard = allWishesMap.find(item => item._id === wishCard._id);

    const showModal = () => {
        setIsModalVisible(true);
        setCurrentWishIndex(currentIndex);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const navigateWish = (direction: 'prev' | 'next') => {
        const newIndex = direction === 'prev' ? currentWishIndex - 1 : currentWishIndex + 1;
        if (newIndex >= 0 && newIndex < allWishes.length) {
          setCurrentWishIndex(newIndex);
        }
      };

    return (
        <div>
            <Card hoverable style={{ margin: 20, width: 300 }} cover={<Image alt="example" src={mappedWishCard ? mappedWishCard.stickerDOWN: 'defaultImageURL'} width={40} height={400} sizes='100vw' />} onClick={showModal}>
                <Meta title={`${wishCard.name} #${wishCard.cardNumber}`} description={wishCard.wish} />
            </Card>
            
            <Modal open={isModalVisible} footer={null} onCancel={handleCancel} width={600}>
                <Button onClick={() => navigateWish('prev')} icon={<LeftOutlined />}></Button>
                <Card hoverable style={{ width: '100%' }} cover={<Image alt="example" src={currentWish ? currentWish.stickerDOWN : STICKER_7} width={40} height={400} sizes='100vw' />}>
                    <Meta title={`${currentWish.name} #${currentWish.cardNumber}`} description={currentWish.wish} />
                </Card>
                <Button onClick={() => navigateWish('next')} icon={<RightOutlined />} />
            </Modal>
        </div>
    );
    }

export default WishCardTemplate;

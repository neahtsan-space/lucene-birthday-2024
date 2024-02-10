import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { IWishCardDB, IWishCardFront } from '@/interfaces/IWishcard';
import { mapDbToFront } from './wishMapper';
import { STICKER_1, STICKER_5, STICKER_7 } from '@/params/card_params';
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
            <div>
                <Image className='modal-img-style-top'src={mappedWishCard?.stickerUP ?? ''} width={100} height={100} alt=''/>
                <Card hoverable style={{
                    position: "relative", 
                    margin: 40, 
                    height: 400, 
                    width: 300,
                    overflow: "hidden",
                    borderColor: currentWish.borderColor,
                    borderWidth: 20 }} onClick={showModal}>
                    <Meta className=''title={`${wishCard.name} #${wishCard.cardNumber}`} description={
                        <div>
                            <p>{wishCard.time}</p>
                            <p>{wishCard.wish}</p>
                        </div>
                    }  />
                </Card>
                <Image className='modal-img-style-buttom' src={mappedWishCard?.stickerDOWN ?? ''} width={100} height={100} alt=''/>
            </div>
            
            <Modal className='modalStyle'open={isModalVisible} footer={null} onCancel={handleCancel} width={800}  >
                <div>
                <Button onClick={() => navigateWish('prev')} className='modal-icon-top' icon={<LeftOutlined />}></Button>
                <div className='modal-body'>
                <Image className='modal-img-style-top' alt="example" src={currentWish ? currentWish.stickerUP : STICKER_1} width={200} height={200} sizes='100vw' />
                <Card hoverable style={{ width: '100%' }} >
                    <Meta title={`${currentWish.name} #${currentWish.cardNumber}`} description={
                        <div>
                            <p>{currentWish.time}</p>
                            <p>{currentWish.wish}</p>
                        </div>
                    }  />
                </Card>
                <Image alt="example" src={currentWish ? currentWish.stickerDOWN : STICKER_5} width={40} height={400} sizes='100vw' />
                </div>

                <Button onClick={() => navigateWish('next')} icon={<RightOutlined />} />
            </Modal>
        </div>
    );
    }

const WishCardDemo: React.FC<{wishCard: IWishCardFront}> = ({wishCard}) => {
    return (
        <div>
            <Image alt='demo' src={wishCard.stickerUP} width={40} height={400} sizes='100vw' />
            <Card hoverable style={{ margin: 30, width: 300}} >
                <Meta title={`${wishCard.name} #${wishCard.cardNumber}`} description={wishCard.wish} />
            </Card>
            <Image alt='demo' src={wishCard.stickerDOWN} width={40} height={400} sizes='100vw' />
        </div>
    )
}

export { WishCardTemplate, WishCardDemo}

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
                <div style={{ position: "relative", margin: "40px", width: "300px" }} onClick={showModal}>
                    <div style={{ position: "absolute", top: -40, left: -40, zIndex: 1 }}>
                        <Image src={mappedWishCard?.stickerUP ?? ''} width={100} height={100} alt='' />
                    </div>
                    <div style={{ position: "absolute", bottom: -40, right: -40, zIndex: 1 }}>
                        <Image src={mappedWishCard?.stickerDOWN ?? ''} width={100} height={100} alt='' />
                    </div>
                    <Card
                        hoverable
                        style={{
                        height: 500,
                        width: 300,
                        overflow: "visible",
                        borderColor: wishCard.borderColor,
                        borderWidth: 20,
                        position: "relative", // Ensure Card is positioned relative to its new container.
                        zIndex: 0, // Ensure Card is under the images.
                        }}
                    >
                        <Meta
                        title={`${wishCard.name} #${wishCard.cardNumber}`}
                        description={
                            <div>
                            <p>{wishCard.time}</p>
                            <p>{wishCard.wish}</p>
                            </div>
                        }
                        />
                    </Card>
                </div>
            
                <Modal className='modalStyle' open={isModalVisible} footer={null} onCancel={handleCancel} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '6%'}}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Button onClick={() => navigateWish('prev')} className='modal-icon-top' icon={<LeftOutlined />}></Button>
                        
                        <div style={{ margin: "0 20px" }}> {/* This container ensures the card doesn't touch the buttons */}
                            <div style={{ position: "relative", width: "300px" }} onClick={showModal}>
                                <div style={{ position: "absolute", top: -40, left: -40, zIndex: 1 }}>
                                    <Image src={mappedWishCard?.stickerUP ?? ''} width={100} height={100} alt='' />
                                </div>
                                <div style={{ position: "absolute", bottom: -40, right: -40, zIndex: 1 }}>
                                    <Image src={mappedWishCard?.stickerDOWN ?? ''} width={100} height={100} alt='' />
                                </div>
                                <Card
                                    hoverable
                                    style={{
                                        height: 500,
                                        width: 300,
                                        overflow: "visible",
                                        borderColor: currentWish.borderColor,
                                        borderWidth: 20,
                                        position: "relative", // Ensure Card is positioned relative to its new container.
                                        zIndex: 0, // Ensure Card is under the images.
                                    }}
                                >
                                    <Meta
                                        title={`${currentWish.name} #${currentWish.cardNumber}`}
                                        description={
                                            <div>
                                                <p>{currentWish.time}</p>
                                                <p>{currentWish.wish}</p>
                                            </div>
                                        }
                                    />
                                </Card>
                            </div>
                        </div>

                        <Button onClick={() => navigateWish('next')} icon={<RightOutlined />} />
                    </div>
                </Modal>
        </div>
    );
    }

const WishCardDemo: React.FC<{wishCard: IWishCardFront}> = ({wishCard}) => {
    return (
        <div style={{ position: "relative", margin: "40px", width: "300px" }}>
            <div style={{ position: "absolute", top: -40, left: -40, zIndex: 1 }}>
                <Image src={wishCard.stickerUP} width={100} height={100} alt='' />
            </div>
            <div style={{ position: "absolute", bottom: -40, right: -40, zIndex: 1 }}>
                <Image src={wishCard.stickerDOWN} width={100} height={100} alt='' />
            </div>
            <Card
                hoverable
                style={{
                height: 500,
                width: 300,
                overflow: "visible",
                borderColor: wishCard.borderColor,
                borderWidth: 20,
                position: "relative", // Ensure Card is positioned relative to its new container.
                zIndex: 0, // Ensure Card is under the images.
                }}
            >
                <Meta
                title={`${wishCard.name} #${wishCard.cardNumber}`}
                description={
                    <div>
                    <p>{wishCard.time}</p>
                    <p>{wishCard.wish}</p>
                    </div>
                }
                />
            </Card>
        </div>
    )
}

export { WishCardTemplate, WishCardDemo}

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
                    <div style={{ position: "absolute", top: -40, left: -40, zIndex: 1 , transform: 'rotate(-30deg)'}}>
                        <Image src={mappedWishCard?.stickerUP ?? ''} width={100} height={100} alt='' />
                    </div>
                    <div style={{ position: "absolute", bottom: -40, right: -40, zIndex: 1 , transform: 'rotate(15deg)', }}>
                        <Image src={mappedWishCard?.stickerDOWN ?? ''} width={100} height={100} alt='' />
                    </div>
                    <Card className='card2'
                        hoverable
                        style={{
                        height: 500,
                        width: 300,
                        overflow: "hidden",
                        textOverflow: 'ellipsis',
                        borderColor: wishCard.borderColor,
                        backgroundImage: 'url(rrain.avif)', backgroundSize: 'auto',backgroundRepeat: 'repeat',backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 20,
                        position: "relative", // Ensure Card is positioned relative to its new container.
                        zIndex: 0, // Ensure Card is under the images.
                        }}
                    >
                        <Meta style={{fontWeight: 'bold',overflow: 'hidden'}}
                        title={
                            <span style={{ color: 'blue', fontWeight: 'bold' }}>
                                {wishCard.name} #{wishCard.cardNumber}
                            </span>
                        }
                        
                        description={
                            <div>
                                <p style={{ color: 'black', fontSize: '100%' }}>{wishCard.time}</p>
                                <p style={{ color: 'rgb(93, 186, 199)', fontSize: '120%',  }}>{wishCard.wish}</p>
                            </div>
                        }
                        />
                    </Card>
                </div>
            
                <Modal className='modalStyle' open={isModalVisible} footer={null} onCancel={handleCancel }>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                        <Button onClick={() => navigateWish('prev')} className='modal-icon-top' icon={<LeftOutlined />}></Button>
                        
                        <div style={{ margin: "0 20px" }}> {/* This container ensures the card doesn't touch the buttons */}
                            <div style={{ position: "relative", width: "300px" }} onClick={showModal}>
                                <div style={{ position: "absolute", top: -90, left: -90, zIndex: 1, transform: 'rotate(-30deg)'}}>
                                    <Image src={mappedWishCard?.stickerUP ?? ''} width={200} height={200} alt='' />
                                </div>
                                <div style={{ position: "absolute", bottom: -90, right: -90, zIndex: 1 ,transform: 'rotate(15deg)'}}>
                                    <Image src={mappedWishCard?.stickerDOWN ?? ''} width={200} height={200} alt='' />
                                </div>
                                <Card className='card'
                                    hoverable
                                    style={{
                                        height: 700,
                                        width: 300,
                                        overflow: "visible",
                                        borderColor: wishCard.borderColor,
                                        borderWidth: 20,
                                        backgroundImage: 'url(rrain.avif)', backgroundSize: 'auto',backgroundRepeat: 'repeat',backgroundBlendMode: '' ,backgroundColor: 'rgba(255, 255, 255, 1)',
                                        position: "relative", // Ensure Card is positioned relative to its new container.
                                        zIndex: 0, // Ensure Card is under the images.
                                    }}
                                >
                                <Meta style={{fontWeight: 'bold',overflow: 'hidden'}}
                                title={
                                    <span style={{ color: 'blue', fontWeight: 'bold' }}>
                                        {wishCard.name} #{wishCard.cardNumber}
                                    </span>
                                }
                        
                                description={
                                    <div>
                                        <p style={{ color: 'black', fontSize: '100%' }}>{wishCard.time}</p>
                                        <p style={{ color: 'rgb(93, 186, 199)', fontSize: '120%',  }}>{wishCard.wish}</p>
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
                height: 700,
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

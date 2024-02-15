import React, { useState } from 'react';
import Image from "next/legacy/image";
import { IWishCard } from '@/interfaces/IWishcard';
import { Card, Modal, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { Meta } = Card;

const WishCardTemplate: React.FC<{wishCard: IWishCard, allWishes: IWishCard[], currentIndex: number}> = ({wishCard, allWishes, currentIndex}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentWishIndex, setCurrentWishIndex] = useState(currentIndex);

    const currentWish = allWishes[currentWishIndex];

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
                <div style={{ position: "relative", zIndex: 0 }}>
                    <div style={{ position: "absolute", top: -40, left: -40, zIndex: 1, transform: 'rotate(-30deg)' }}>
                        <Image src={wishCard?.stickerUp ?? ''} width={100} height={100} alt='' />
                    </div>
                    <div style={{ position: "absolute", bottom: -40, right: -40, zIndex: 1, transform: 'rotate(15deg)' }}>
                        <Image src={wishCard?.stickerDown ?? ''} width={100} height={100} alt='' />
                    </div>
                <Card className='card2'
                        hoverable
                        style={{
                        height: 500,
                        width: 300,
                        overflow: "hidden",
                        textOverflow: 'ellipsis',
                        borderColor: wishCard.borderColor,
                        backgroundColor: 'white',
                        borderWidth: 10,
                        position: "relative",
                        zIndex: 0, 
                        }}
                    >
                <Meta style={{ fontWeight: 'bold', overflow: 'hidden' }}
                            title={
                                <span style={{ color: 'blue', fontWeight: 'bold' }}>
                                    {wishCard.name} #{wishCard.cardNumber}
                                </span>
                            }

                            description={
                                <div>
                                    <p style={{ color: 'black', fontSize: '100%' }}>{wishCard.time}</p>
                                    <p style={{ paddingTop: '10%', color: 'rgb(93, 186, 199)', fontSize: '120%' }}>{wishCard.wish}</p>
                                </div>
                            }
                        />
                </Card>
                </div>
            </div>
            
                <Modal open={isModalVisible} footer={null} onCancel={handleCancel}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', padding: '10%' }}>
                    <Button style={{marginRight:'15%'}}onClick={() => navigateWish('prev')} className='modal-icon-top' icon={<LeftOutlined />} />
                        <div style={{ width: '80%', textAlign: 'center' }}>
                        <div style={{ position: "relative" }} onClick={showModal}>
                        <div style={{ position: "absolute", top: -150, left: -150, zIndex: 1, transform: 'rotate(-30deg)' }}>
                    <Image src={currentWish?.stickerUp ?? ''} width={300} height={300} alt='' />
                        </div>
                        <div style={{ position: "absolute", bottom: -170, right: -250, zIndex: 1, transform: 'rotate(15deg)' }}>
                    <Image src={currentWish?.stickerDown ?? ''} width={400} height={400} alt='' />
                        </div>
                    <Card className='card' hoverable style={{
                        height:'750px',
                        width: '350px',
                        overflow: "visible",
                        borderColor: currentWish.borderColor,
                        borderWidth: 10,
                        padding: '1%',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        position: "relative",
                        zIndex: 0,
                        margin: '0 auto'
                    }}>
                    <Meta style={{ fontWeight: 'bold', overflow: 'hidden' }}
                        title={
                            <p style={{ color: 'blue', fontWeight: 'bold', fontSize:'150%', overflow:'hidden' ,textOverflow: 'ellipsis',whiteSpace: 'normal' }}>
                                {currentWish.name} #{currentWish.cardNumber}
                            </p>
                        }
                        description={
                            <div>
                                <p style={{ color: 'black', fontSize: '100%' }}>{currentWish.time}</p>
                                <p style={{ paddingTop:'10%' ,color: 'rgb(93, 186, 199)', fontSize: '120%', }}>{currentWish.wish}</p>
                            </div>
                        }
                    />
                    </Card>
                        </div>
                        </div>
                    <Button style={{marginLeft:'25%'}} onClick={() => navigateWish('next')} icon={<RightOutlined />} />
                </div>
            </Modal>
        </div>
    );
    }

const WishCardDemo: React.FC<{wishCard: IWishCard}> = ({wishCard}) => {
    return (
        <div style={{ position: "relative", margin: "40px", width: "300px" }}>
            <div style={{ position: "absolute", top: -40, left: -40, zIndex: 1 }}>
                <Image src={wishCard.stickerUp} width={100} height={100} alt='' />
            </div>
            <div style={{ position: "absolute", bottom: -40, right: -40, zIndex: 1 }}>
                <Image src={wishCard.stickerDown} width={100} height={100} alt='' />
            </div>
            <Card
                hoverable
                style={{
                height: 700,
                width: 300,
                overflow: "visible",
                borderColor: wishCard.borderColor,
                borderWidth: 20,
                position: "relative",
                zIndex: 0,
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

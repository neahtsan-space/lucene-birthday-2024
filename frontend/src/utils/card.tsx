import React, { useState } from 'react';
import Image from 'next/image';
import IWishCard from '@/interfaces/IWishcard';
import { STICKER_7 } from '@/params/card_params';
import { Card, Modal } from 'antd';

const { Meta } = Card;

const WishCardTemplate: React.FC<{wishCard: IWishCard}> = ({wishCard}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            {/* The original card that opens the modal on click */}
            <Card
                hoverable
                style={{ margin: 20, width: 300 }}
                cover={<Image alt="example" src={STICKER_7} width={40} height={400} layout='responsive' />}
                onClick={showModal}
            >
                <Meta title={`${wishCard.name} #${wishCard.cardNumber}`} description={wishCard.wish} />
            </Card>
            
            {/* The modal that displays the larger card */}
            <Modal
                open={isModalVisible}
                footer={null} // Hides the default footer
                onCancel={handleCancel}
                width={600} // Adjust the size of the modal as needed
            >
                <Card
                    hoverable
                    style={{ width: '100%' }} // Adjust the card size within the modal as needed
                    cover={<Image alt="example" src={STICKER_7} width={40} height={400} layout='responsive' />}
                >
                    <Meta title={`${wishCard.name} #${wishCard.cardNumber}`} description={wishCard.wish} />
                </Card>
            </Modal>
        </div>
    );
    }

export default WishCardTemplate;
import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Modal, Input, Radio, Card, RadioChangeEvent } from 'antd';
import * as WISHCONSTANT from '@/params/wishCommand_params';

const { TextArea } = Input;

const first_options = [
    { value: WISHCONSTANT.STICKER_1_NAME, label: 'Option 1', image: WISHCONSTANT.STICKER_1 },
    { value: WISHCONSTANT.STICKER_2_NAME, label: 'Option 2', image: WISHCONSTANT.STICKER_2 },
    { value: WISHCONSTANT.STICKER_3_NAME, label: 'Option 3', image: WISHCONSTANT.STICKER_3 },
    { value: WISHCONSTANT.STICKER_4_NAME, label: 'Option 4', image: WISHCONSTANT.STICKER_4 },
];

const second_options = [
    { value: WISHCONSTANT.STICKER_5_NAME, label: 'Option 1', image: WISHCONSTANT.STICKER_5 },
    { value: WISHCONSTANT.STICKER_6_NAME, label: 'Option 2', image: WISHCONSTANT.STICKER_6 },
    { value: WISHCONSTANT.STICKER_7_NAME, label: 'Option 3', image: WISHCONSTANT.STICKER_7 },
    { value: WISHCONSTANT.STICKER_8_NAME, label: 'Option 4', image: WISHCONSTANT.STICKER_8 },
];

const CreateWishCardButton = () => {
        const [isModalVisible, setIsModalVisible] = useState(false);
        const [nameInputValue, setNameInputValue] = useState('');
        const [wishInputValue, setWishInputValue] = useState('');
        const [selectedFirstOption, setSelectedFirstOption] = useState(first_options[0].value);
        const [selectedSecondOption, setSelectedSecondOption] = useState(second_options[0].value);
    
        const showModal = () => {
            setIsModalVisible(true);
        };
    
        const handleOk = () => {
            setIsModalVisible(false);
            console.log("Name Input Value:", nameInputValue);
            console.log("Wish Input Value:", wishInputValue);
            console.log("Selected Option:", selectedFirstOption);
            console.log("Selected Option:", selectedSecondOption);
            // Here you can handle the submission or processing of input data
        };
    
        const handleCancel = () => {
            setIsModalVisible(false);
        };

        const handleFirstChange = (e: RadioChangeEvent) => {
            setSelectedFirstOption(e.target.value);
        }

        const handleSecondChange = (e: RadioChangeEvent) => {
            setSelectedSecondOption(e.target.value);
        }
    
        return (
                <>
                        <Button type="primary" onClick={showModal}>
                                {WISHCONSTANT.CREATE_WISHCARD_BUTTON_TEXT}
                        </Button>
                        <Modal title={WISHCONSTANT.CREATE_WISHCARD_MODAL_TITLE} open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>{WISHCONSTANT.CREATE_WISHCARD_MODAL_NAME}</p>
                                <p>{WISHCONSTANT.CREATE_WISHCARD_BUTTON_NAME_WARNING}</p>
                                <Input placeholder={WISHCONSTANT.CREATE_WISHCARD_MODAL_NAME_PLACEHOLDER} maxLength={WISHCONSTANT.CREATE_WISHCARD_MODAL_NAME_TEXT_LIMIT} 
                                value={nameInputValue} onChange={e => setNameInputValue(e.target.value)}>
                                </Input>
                                <p>{WISHCONSTANT.CREATE_WISHCARD_MODAL_WISH_TITLE}</p>
                                <p>{WISHCONSTANT.CREATE_WISHCARD_BUTTON_WISH_WARNING}</p>
                                <TextArea 
                                    placeholder={WISHCONSTANT.CREATE_WISHCARD_MODAL_WISH_PLACEHOLDER}
                                    maxLength={WISHCONSTANT.CREATE_WISHCARD_MODAL_WISH_TEXT_LIMIT} 
                                    value={wishInputValue} 
                                    onChange={e => setWishInputValue(e.target.value)}
                                    autoSize={{ minRows: 2, maxRows: 6 }} // Adjust rows as needed
                                />
                                <p>Test 1</p>
                                <Radio.Group onChange={handleFirstChange} value={selectedFirstOption} style={{ width: '100%' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                    {first_options.map((option) => (
                                        <Radio value={option.value} key={option.value} style={{ flex: '1 1 calc(50% - 16px)' }}>
                                        <Card 
                                            hoverable 
                                            cover={<Image alt={option.label} src={option.image} width={40} height={40} />} 
                                            style={{ width: '100%' }}
                                        >
                                            {option.label}
                                        </Card>
                                        </Radio>
                                    ))}
                                    </div>
                                </Radio.Group>
                                <p>Test 2</p>
                                <Radio.Group onChange={handleSecondChange} value={selectedSecondOption} style={{ width: '100%' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                    {second_options.map((option) => (
                                        <Radio value={option.value} key={option.value} style={{ flex: '1 1 calc(50% - 16px)' }}>
                                        <Card 
                                            hoverable 
                                            cover={<Image alt={option.label} src={option.image} width={40} height={40} />} 
                                            style={{ width: '100%' }}
                                        >
                                            {option.label}
                                        </Card>
                                        </Radio>
                                    ))}
                                    </div>
                                </Radio.Group>
                        </Modal>
                </>
        );
};
  
  export default CreateWishCardButton;
  
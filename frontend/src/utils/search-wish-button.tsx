import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Modal, Input, Card, RadioChangeEvent } from 'antd';
import * as WISHCONSTANT from '@/params/wishCommand_params';

const { TextArea } = Input;

const SearchWishCardButton = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [nameInputValue, setNameInputValue] = useState('');

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        console.log("Name Input Value:", nameInputValue);
        // Here you can handle the submission or processing of input data
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type='default' onClick={showModal}>
                {WISHCONSTANT.SEARCH_WISHCARD_BUTTON_NAME}
            </Button>
            <Modal title={WISHCONSTANT.SEARCH_WISHCARD_MODAL_TITLE} open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>{WISHCONSTANT.SEARCH_WISHCARD_MODAL_NAME}</p>
                <Input value={nameInputValue} maxLength={WISHCONSTANT.CREATE_WISHCARD_MODAL_NAME_TEXT_LIMIT} onChange={(e) => setNameInputValue(e.target.value)} />
            </Modal>
        </>
    )
}

export { SearchWishCardButton }
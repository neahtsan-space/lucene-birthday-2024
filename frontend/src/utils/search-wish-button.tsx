import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
import * as WISHCONSTANT from '@/params/wishCommand_params';
import { GetWishByName } from '../../api/api';
import { FailureAlert } from './alert';
import { WishCardDemo } from './card';
import { IWishCard } from '@/interfaces/IWishcard';


const SearchWishCardButton = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [nameInputValue, setNameInputValue] = useState('');
    const [isFailureAlertModalVisible, setIsFailureAlertModalVisible] = useState(false);
    const [wishCardDetails, setWishCardDetails] = useState<IWishCard | null>(null);
    const [errorParams, setErrorParams] = useState({
        FailureTitle: '',
        FailureMessage: '',
        AlertStyle: {}
    });

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        setIsModalVisible(false);

        if (nameInputValue === '') {
            setErrorParams({
                FailureTitle: WISHCONSTANT.SEARCH_WISHCARD_INCOORECT_TITLE,
                FailureMessage: WISHCONSTANT.SEARCH_WISHCARD_INCOORECT_DESC,
                AlertStyle: { width: '100%' }
            });
            return;
        }
    
        try {
            const res = await GetWishByName(nameInputValue);
            if (res !== null) {
                const mappedWish = res;
                setWishCardDetails(mappedWish);
                setIsModalVisible(false); 
            } else {
                setErrorParams({
                    FailureTitle: WISHCONSTANT.SEARCH_WISHCARD_NOT_FOUND_TITLE,
                    FailureMessage: WISHCONSTANT.SEARCH_WISHCARD_NOT_FOUND_DESC,
                    AlertStyle: { width: '100%' }
                });
                setIsFailureAlertModalVisible(true);
            }
        } catch (error) {
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type='default' size='large' onClick={showModal}>
                {WISHCONSTANT.SEARCH_WISHCARD_BUTTON_NAME}
            </Button>
            <Modal title={WISHCONSTANT.SEARCH_WISHCARD_MODAL_TITLE} open={isModalVisible} onOk={handleOk} onCancel={handleCancel} centered={true}>
                <p>{WISHCONSTANT.SEARCH_WISHCARD_MODAL_NAME}</p>
                <Input value={nameInputValue} onChange={(e) => setNameInputValue(e.target.value)} />
            </Modal>
            <Modal open={isFailureAlertModalVisible} onCancel={() => setIsFailureAlertModalVisible(false)} centered={true}>
                <FailureAlert {...errorParams} />
            </Modal>
            {wishCardDetails && (
                <Modal title="Wish Card Details" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} open={true} onCancel={() => setWishCardDetails(null)} footer={null}>
                    <WishCardDemo wishCard={wishCardDetails} />
                </Modal>
            )}
        </>
    )
}

export { SearchWishCardButton };

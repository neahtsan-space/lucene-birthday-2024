import { useState, useEffect } from 'react';
import { Button, Modal, Input, Radio, Card, Image } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import * as WISHCONSTANT  from '@/params/wishCommand_params';
import { WishCardDemo } from './card';
import { IWishCardPost } from '@/interfaces/IWishcard';
import { stickerToPicture } from './wishMapper';
import { CreateWishCard } from '../../api/api';
import { SuccessAlert, FailureAlert } from './alert';

const { TextArea } = Input;

interface Option {
    value: string;
    label: string;
    image: string;
}

const first_options: Option[] = [
    { value: WISHCONSTANT.STICKER_1_NAME, label: 'Sticker 1', image: WISHCONSTANT.STICKER_1 },
    { value: WISHCONSTANT.STICKER_2_NAME, label: 'Sticker 2', image: WISHCONSTANT.STICKER_2 },
    { value: WISHCONSTANT.STICKER_3_NAME, label: 'Sticker 3', image: WISHCONSTANT.STICKER_3 },
    { value: WISHCONSTANT.STICKER_4_NAME, label: 'Sticker 4', image: WISHCONSTANT.STICKER_4 },
];

const second_options: Option[] = [
    { value: WISHCONSTANT.STICKER_5_NAME, label: 'Sticker 1', image: WISHCONSTANT.STICKER_5 },
    { value: WISHCONSTANT.STICKER_6_NAME, label: 'Sticker 2', image: WISHCONSTANT.STICKER_6 },
    { value: WISHCONSTANT.STICKER_7_NAME, label: 'Sticker 3', image: WISHCONSTANT.STICKER_7 },
    { value: WISHCONSTANT.STICKER_8_NAME, label: 'Sticker 4', image: WISHCONSTANT.STICKER_8 },
];

interface ColorOption {
    label: string;
    color: string;

}

const third_options: ColorOption[] = [
    { label: 'Color 1', color: WISHCONSTANT.COLOR_1 },
    { label: 'Color 2', color: WISHCONSTANT.COLOR_2 },
    { label: 'Color 3', color: WISHCONSTANT.COLOR_3 },
    { label: 'Color 4', color: WISHCONSTANT.COLOR_4 },
];

interface IMapInputToImage {
    imageChoice: string;
    imagePath: string;
}

const MapInputToImage: IMapInputToImage[] = [
    { imageChoice: 'sticker1', imagePath: WISHCONSTANT.STICKER_1 },
    { imageChoice: 'sticker2', imagePath: WISHCONSTANT.STICKER_2 },
    { imageChoice: 'sticker3', imagePath: WISHCONSTANT.STICKER_3 },
    { imageChoice: 'sticker4', imagePath: WISHCONSTANT.STICKER_4 },
    { imageChoice: 'sticker5', imagePath: WISHCONSTANT.STICKER_5 },
    { imageChoice: 'sticker6', imagePath: WISHCONSTANT.STICKER_6 },
    { imageChoice: 'sticker7', imagePath: WISHCONSTANT.STICKER_7 },
    { imageChoice: 'sticker8', imagePath: WISHCONSTANT.STICKER_8 },
]

const imageChoiceToPathMap = MapInputToImage.reduce((acc, cur) => {
    acc[cur.imageChoice] = cur.imagePath;
    return acc;
}, {} as { [key: string]: string });

const CreateWishCardButton: React.FC = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [nameInputValue, setNameInputValue] = useState('');
    const [wishInputValue, setWishInputValue] = useState('');
    const [selectedFirstOption, setSelectedFirstOption] = useState(first_options[0].value);
    const [selectedSecondOption, setSelectedSecondOption] = useState(second_options[0].value);
    const [selectedThirdOption, setSelectedThirdOption] = useState(third_options[0].color);
    const [countdown, setCountdown] = useState(5);
    const [isSuccessAlertModalVisible, setIsSuccessAlertModalVisible] = useState(false);
    const [isFailureAlertModalVisible, setIsFailureAlertModalVisible] = useState(false);
    const [alertParams, setAlertParams] = useState({
        SuccessTitle: '',
        SuccessMessage: '',
        AlertStyle: {}
    });
    const [errorParams, setErrorParams] = useState({
        FailureTitle: '',
        FailureMessage: '',
        AlertStyle: {}
    });

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isSuccessAlertModalVisible && countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        } else if (countdown === 0) {
            setIsSuccessAlertModalVisible(false);
            window.location.reload();
        }
        return () => clearTimeout(timer);
    }, [isSuccessAlertModalVisible, countdown]);

    const getImagePathForOption = (optionValue: string): string => {
        return imageChoiceToPathMap[optionValue] || ''}

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {

        if (nameInputValue === '' || wishInputValue === '') {
            setErrorParams({
                FailureTitle: WISHCONSTANT.CREATE_WISHCARD_NAME_WARNING,
                FailureMessage: WISHCONSTANT.CREATE_WISHCARD_NAME_WARNING_DESC,
                AlertStyle: {backgroundColor: 'white', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}
            });
            setIsFailureAlertModalVisible(true);
            return;
        }


        setIsModalVisible(false);

        const wishCardObject: IWishCardPost = {
            name: nameInputValue,
            wish: wishInputValue,
            picture: stickerToPicture([selectedFirstOption, selectedSecondOption]) || '',
            borderColor: selectedThirdOption,
        }

        CreateWishCard(wishCardObject).then((response) => {
            setAlertParams({
                SuccessTitle: WISHCONSTANT.CREATE_WISHCARD_SUCCESS_ALERT, 
                SuccessMessage: WISHCONSTANT.CREATE_WISHCARD_SUCCESS_DESC,
                AlertStyle: {backgroundColor: 'white', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}
            });
            setIsSuccessAlertModalVisible(true);
            setCountdown(WISHCONSTANT.COUNT_DOWN_REFRESH_SEC);

            setTimeout(() => {
                setIsSuccessAlertModalVisible(false);
                window.location.reload();
            }, 5000);
        }).catch((error) => {
            console.log("Error:", error);
        });
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
    const handleThirdChange = (e: RadioChangeEvent) => {
        setSelectedThirdOption(e.target.value);
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                {WISHCONSTANT.CREATE_WISHCARD_BUTTON_TEXT}
            </Button>
            <Modal style={{fontWeight: 'bold',overflow: 'hidden' ,color: 'black'}} title= {WISHCONSTANT.CREATE_WISHCARD_MODAL_TITLE} open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                <p style={{color:'blue'}}>{WISHCONSTANT.CREATE_WISHCARD_MODAL_NAME}</p>
                <p>จำกัด: {nameInputValue.length} / {WISHCONSTANT.CREATE_WISHCARD_MODAL_NAME_TEXT_LIMIT}</p> 
                <Input placeholder={WISHCONSTANT.CREATE_WISHCARD_MODAL_NAME_PLACEHOLDER} maxLength={WISHCONSTANT.CREATE_WISHCARD_MODAL_NAME_TEXT_LIMIT}
                    value={nameInputValue} onChange={e => setNameInputValue(e.target.value)}>
                </Input>
                <p>{WISHCONSTANT.CREATE_WISHCARD_MODAL_WISH_TITLE}</p>
                <p>จำกัด: {wishInputValue.length} / {WISHCONSTANT.CREATE_WISHCARD_MODAL_WISH_TEXT_LIMIT}</p>
                <TextArea
                    placeholder={WISHCONSTANT.CREATE_WISHCARD_MODAL_WISH_PLACEHOLDER}
                    maxLength={WISHCONSTANT.CREATE_WISHCARD_MODAL_WISH_TEXT_LIMIT}
                    value={wishInputValue}
                    onChange={e => setWishInputValue(e.target.value)}
                    autoSize={{ minRows: 2, maxRows: 6 }} // Adjust rows as needed
                />
                <p>{WISHCONSTANT.RADIO_TITLE_1}</p>
                <Radio.Group onChange={handleFirstChange} value={selectedFirstOption} style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        {first_options.map((option) => (
                            <Radio value={option.value} key={option.value} style={{ flex: '1 1 calc(50% - 16px)' }}>
                                <Card
                                    hoverable
                                    cover={<Image alt={option.label} src={option.image} width={40} height={40}  />}
                                    style={{ width: '100%' }}
                                >
                                    {option.label}
                                </Card>
                            </Radio>
                        ))}
                    </div>
                </Radio.Group>
                {selectedFirstOption && (
                    <>
                        <p>{WISHCONSTANT.RADIO_TITLE_2}</p>
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
                        <p>{WISHCONSTANT.RADIO_TITLE_3}</p>
                        <Radio.Group onChange={handleThirdChange} value={selectedThirdOption} style={{ width: '100%' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                {third_options.map((option) => (
                                    <Radio value={option.color} key={option.color} style={{ flex: '1 1 calc(50% - 16px)' }}>
                                        <Card
                                            hoverable
                                            style={{ width: '150px', height: '200px', backgroundColor: option.color}}
                                        >
                                        </Card>
                                    </Radio>
                                ))}
                            </div>
                        </Radio.Group>
                    </>
                )}
                <p>{WISHCONSTANT.DEMO_TITLE}</p>
                <div>
                    <WishCardDemo wishCard={{ 
                        name: nameInputValue, 
                        wish: wishInputValue, 
                        stickerUP: getImagePathForOption(selectedFirstOption),
                        stickerDOWN: getImagePathForOption(selectedSecondOption),
                        borderColor: selectedThirdOption,
                        __v: 0,
                        _id: '',
                        time: '',
                        cardNumber: 0 }} />
                </div>
            </Modal>
            <Modal
                title="Success"
                open={isSuccessAlertModalVisible}
                onCancel={() => setIsSuccessAlertModalVisible(false)}
                footer={null}
            >
                <SuccessAlert 
                    SuccessTitle={alertParams.SuccessTitle}
                    SuccessMessage={`${WISHCONSTANT.CREATE_WISHCARD_SUCCESS_DESC} ${countdown} วินาที`}
                    AlertStyle={alertParams.AlertStyle}
                />
            </Modal>
            <Modal>
            </Modal>
            <Modal
                title="Error"
                open={isFailureAlertModalVisible}
                onCancel={() => setIsFailureAlertModalVisible(false)}
                footer={null}
            >
                <FailureAlert 
                    FailureTitle={errorParams.FailureTitle}
                    FailureMessage={`${WISHCONSTANT.CREATE_WISHCARD_NAME_WARNING_DESC}`}
                    AlertStyle={errorParams.AlertStyle}
                />
            </Modal>
        </>
    );
};

export default CreateWishCardButton;

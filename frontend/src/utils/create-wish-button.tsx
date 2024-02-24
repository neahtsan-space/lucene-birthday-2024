import { useState, useEffect } from 'react';
import { Button, Modal, Input, Radio, Card, Image } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import * as WISHCONSTANT  from '@/params/wishCommand_params';
import { WishCardDemo } from './card';
import { IWishCardPost } from '@/interfaces/IWishcard';
import { CreateWishCard } from '../../api/api';
import { SuccessAlert, FailureAlert } from './alert';
import { revalidatePath } from 'next/cache';
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import handler from '../../api/recaptchaSubmit';

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


const CreateWishCardButton: React.FC<{ showbutton: boolean }> = ({ showbutton }) => {

    const { executeRecaptcha } = useGoogleReCaptcha();

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


    const handleOk = async() => {

        if (nameInputValue === '' || wishInputValue === '') {
            setErrorParams({
                FailureTitle: WISHCONSTANT.CREATE_WISHCARD_NAME_WARNING,
                FailureMessage: WISHCONSTANT.CREATE_WISHCARD_NAME_WARNING_DESC,
                AlertStyle: {backgroundColor: 'white', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}
            });
            setIsFailureAlertModalVisible(true);
            return;
        }

        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

        const reCaptchaToken = await executeRecaptcha('submit_wish_card');

        const response = await handler({ method: 'POST', body: { gRecaptchaResponse: reCaptchaToken } } as any, {} as any);

        if (!response) {
            setErrorParams({
                FailureTitle: WISHCONSTANT.CREATE_WISHCARD_NAME_WARNING,
                FailureMessage: WISHCONSTANT.RECAPTCHA_FAILURE_DESC,
                AlertStyle: {backgroundColor: 'white', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}
            });
            setIsFailureAlertModalVisible(true);
            return;
        }

        setIsModalVisible(false);

        const wishCardObject: IWishCardPost = {
            name: nameInputValue,
            wish: wishInputValue,
            stickerUp: getImagePathForOption(selectedFirstOption),
            stickerDown: getImagePathForOption(selectedSecondOption),
            borderColor: selectedThirdOption,
        }

        CreateWishCard(wishCardObject).then((response) => {
            const { status, body } = response as { status: number; body: any };

            if(status !== 201) {
                setErrorParams({
                    FailureTitle: WISHCONSTANT.CREATE_WISHCARD_NAME_WARNING,
                    FailureMessage: body.message,
                    AlertStyle: {backgroundColor: 'white', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}
                });
                setIsFailureAlertModalVisible(true);
                return;
            }

            setAlertParams({
                SuccessTitle: WISHCONSTANT.CREATE_WISHCARD_SUCCESS_ALERT, 
                SuccessMessage: WISHCONSTANT.CREATE_WISHCARD_SUCCESS_DESC,
                AlertStyle: {backgroundColor: 'white', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}
            });
            setIsSuccessAlertModalVisible(true);
            setCountdown(WISHCONSTANT.COUNT_DOWN_REFRESH_SEC);

            revalidatePath('/')
            setIsSuccessAlertModalVisible(false);

        }).catch((error) => {
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
        {showbutton && (
            <><Button type="primary" size='large' shape='round'  onClick={showModal}>
                    {WISHCONSTANT.CREATE_WISHCARD_BUTTON_TEXT}
                </Button><Modal zIndex={5} style={{ fontWeight: 'bold', overflow: 'hidden', color: 'black', userSelect: 'none' }} title={WISHCONSTANT.CREATE_WISHCARD_MODAL_TITLE} open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                        <p style={{ color: 'blue', paddingTop: '1vh' }}>{WISHCONSTANT.CREATE_WISHCARD_MODAL_NAME}</p>
                        <p>จำกัด: {nameInputValue.length} / {WISHCONSTANT.CREATE_WISHCARD_MODAL_NAME_TEXT_LIMIT}</p>
                        <Input placeholder={WISHCONSTANT.CREATE_WISHCARD_MODAL_NAME_PLACEHOLDER} maxLength={WISHCONSTANT.CREATE_WISHCARD_MODAL_NAME_TEXT_LIMIT}
                            value={nameInputValue} onChange={e => setNameInputValue(e.target.value)}>
                        </Input>
                        <p style={{ paddingTop: '1vh' }}>{WISHCONSTANT.CREATE_WISHCARD_MODAL_WISH_TITLE}</p>
                        <p>จำกัด: {wishInputValue.length} / {WISHCONSTANT.CREATE_WISHCARD_MODAL_WISH_TEXT_LIMIT}</p>
                        <TextArea
                            placeholder={WISHCONSTANT.CREATE_WISHCARD_MODAL_WISH_PLACEHOLDER}
                            maxLength={WISHCONSTANT.CREATE_WISHCARD_MODAL_WISH_TEXT_LIMIT}
                            value={wishInputValue}
                            onChange={e => setWishInputValue(e.target.value)}
                            autoSize={{ minRows: 2, maxRows: 6 }} // Adjust rows as needed
                        />
                        <p style={{ paddingTop: '1vh', paddingBottom: '1vh' }}>{WISHCONSTANT.RADIO_TITLE_1}</p>
                        <Radio.Group onChange={handleFirstChange} value={selectedFirstOption} style={{ width: '100%' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                {first_options.map((option) => (
                                    <Radio value={option.value} key={option.value} style={{ flex: '1 1 calc(50% - 16px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Card
                                            hoverable
                                            cover={<Image alt='' src={option.image} width={'10vh'} height={'10vh'} />}
                                            style={{ width: '10vh', height: '10vh' }}
                                        >
                                        </Card>
                                    </Radio>
                                ))}
                            </div>
                        </Radio.Group>
                        {selectedFirstOption && (
                            <>
                                <p style={{ paddingTop: '1vh', paddingBottom: '1vh' }}>{WISHCONSTANT.RADIO_TITLE_2}</p>
                                <Radio.Group onChange={handleSecondChange} value={selectedSecondOption} style={{ width: '100%' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                        {second_options.map((option) => (
                                            <Radio value={option.value} key={option.value} style={{ flex: '1 1 calc(50% - 16px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Card
                                                    hoverable
                                                    cover={<Image alt='' src={option.image} width={'10vh'} height={'10vh'} />}
                                                    style={{ width: '10vh', height: '10vh' }}
                                                >
                                                </Card>
                                            </Radio>
                                        ))}
                                    </div>
                                </Radio.Group>
                                <p style={{ paddingTop: '1vh', paddingBottom: '1vh' }}>{WISHCONSTANT.RADIO_TITLE_3}</p>
                                <Radio.Group onChange={handleThirdChange} value={selectedThirdOption} style={{ width: '100%' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                        {third_options.map((option) => (
                                            <Radio value={option.color} key={option.color} style={{ flex: '1 1 calc(50% - 16px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Card
                                                    hoverable
                                                    style={{ width: '10vh', height: '10vh', backgroundColor: option.color }}
                                                >
                                                </Card>
                                            </Radio>
                                        ))}
                                    </div>
                                </Radio.Group>
                            </>
                        )}
                        <p style={{ paddingTop: '3vh' }}>{WISHCONSTANT.DEMO_TITLE}</p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <WishCardDemo wishCard={{
                                name: nameInputValue,
                                wish: wishInputValue,
                                stickerUp: getImagePathForOption(selectedFirstOption),
                                stickerDown: getImagePathForOption(selectedSecondOption),
                                borderColor: selectedThirdOption,
                                __v: 0,
                                _id: '',
                                time: '',
                                cardNumber: 0
                            }} />
                        </div>
                    </Modal><Modal
                        title="Success"
                        open={isSuccessAlertModalVisible}
                        onCancel={() => setIsSuccessAlertModalVisible(false)}
                        footer={null}
                        centered={true}
                    >
                        <SuccessAlert
                            SuccessTitle={alertParams.SuccessTitle}
                            SuccessMessage={`${WISHCONSTANT.CREATE_WISHCARD_SUCCESS_DESC} ${countdown} วินาที`}
                            AlertStyle={alertParams.AlertStyle} />
                    </Modal><Modal>
                    </Modal><Modal
                        title="Error"
                        open={isFailureAlertModalVisible}
                        onCancel={() => setIsFailureAlertModalVisible(false)}
                        footer={null}
                        centered={true}
                    >
                        <FailureAlert
                            FailureTitle={errorParams.FailureTitle}
                            FailureMessage={`${errorParams.FailureMessage}`}
                            AlertStyle={errorParams.AlertStyle} />
                    </Modal></>
        )}
        </>
    );
};

export default CreateWishCardButton;

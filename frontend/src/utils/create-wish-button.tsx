import { useState } from 'react';
import { Button, Modal, Input, Radio, Card, Image } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import * as WISHCONSTANT  from '@/params/wishCommand_params';
import { WishCardDemo } from './card';

const { TextArea } = Input;

interface Option {
    value: string;
    label: string;
    image: string;
}

const first_options: Option[] = [
    { value: WISHCONSTANT.STICKER_1_NAME, label: 'Option 1', image: WISHCONSTANT.STICKER_1 },
    { value: WISHCONSTANT.STICKER_2_NAME, label: 'Option 2', image: WISHCONSTANT.STICKER_2 },
    { value: WISHCONSTANT.STICKER_3_NAME, label: 'Option 3', image: WISHCONSTANT.STICKER_3 },
    { value: WISHCONSTANT.STICKER_4_NAME, label: 'Option 4', image: WISHCONSTANT.STICKER_4 },
];

const second_options: Option[] = [
    { value: WISHCONSTANT.STICKER_5_NAME, label: 'Option 1', image: WISHCONSTANT.STICKER_5 },
    { value: WISHCONSTANT.STICKER_6_NAME, label: 'Option 2', image: WISHCONSTANT.STICKER_6 },
    { value: WISHCONSTANT.STICKER_7_NAME, label: 'Option 3', image: WISHCONSTANT.STICKER_7 },
    { value: WISHCONSTANT.STICKER_8_NAME, label: 'Option 4', image: WISHCONSTANT.STICKER_8 },
];

interface ColorOption {
    label: string;
    color: string;

}

const third_options: ColorOption[] = [
    { label: 'Option 1', color: WISHCONSTANT.COLOR_1 },
    { label: 'Option 2', color: WISHCONSTANT.COLOR_2 },
    { label: 'Option 3', color: WISHCONSTANT.COLOR_3 },
    { label: 'Option 4', color: WISHCONSTANT.COLOR_4 },
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

    const getImagePathForOption = (optionValue: string): string => {
        return imageChoiceToPathMap[optionValue] || ''}

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        console.log("Name Input Value:", nameInputValue);
        console.log("Wish Input Value:", wishInputValue);
        console.log("Selected Option:", selectedFirstOption);
        console.log("Selected Option:", selectedSecondOption);
        console.log("Selected Option:", selectedThirdOption);
        console.log("Selected Option:", getImagePathForOption(selectedFirstOption));
        console.log("Selected Option:", getImagePathForOption(selectedSecondOption));
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
                {selectedFirstOption && (
                    <>
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
                        <p>Test 3</p>
                        <Radio.Group onChange={handleThirdChange} value={selectedThirdOption} style={{ width: '100%' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                {third_options.map((option) => (
                                    <Radio value={option.color} key={option.color} style={{ flex: '1 1 calc(50% - 16px)' }}>
                                        <Card
                                            hoverable
                                            style={{ width: '100%', backgroundColor: option.color}}
                                        >
                                            {option.label}
                                        </Card>
                                    </Radio>
                                ))}
                            </div>
                        </Radio.Group>
                    </>
                )}
                <p>Selected Options Preview:</p>
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
        </>
    );
};

export default CreateWishCardButton;

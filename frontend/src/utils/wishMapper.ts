// Assuming we have 4 top-left sticker and 4 bottom-right sticker
// We keep sticker choice as a string 1-16 in database
import { 
    STICKER_1,
    STICKER_2,
    STICKER_3,
    STICKER_4,
    STICKER_5,
    STICKER_6,
    STICKER_7,
    STICKER_8 } from '../params/card_params';

import { IWishCardDB, IWishCardFront } from '@/interfaces/IWishcard';

function pictureToSticker(picture: string) {
    switch (picture) {
        case '1':
            return [ STICKER_1, STICKER_5 ];
        case '2':
            return [ STICKER_1, STICKER_6 ];
        case '3':
            return [ STICKER_1, STICKER_7 ];
        case '4':
            return [ STICKER_1, STICKER_8 ];
        case '5':
            return [ STICKER_2, STICKER_5 ];
        case '6':
            return [ STICKER_2, STICKER_6 ];
        case '7':
            return [ STICKER_2, STICKER_7 ];
        case '8':
            return [ STICKER_2, STICKER_8 ];
        case '9':
            return [ STICKER_3, STICKER_5 ];
        case '10':
            return [ STICKER_3, STICKER_6 ];
        case '11':
            return [ STICKER_3, STICKER_7 ];
        case '12':
            return [ STICKER_3, STICKER_8 ];
        case '13':
            return [ STICKER_4, STICKER_5 ];
        case '14':
            return [ STICKER_4, STICKER_6 ];
        case '15':
            return [ STICKER_4, STICKER_7 ];
        case '16':
            return [ STICKER_4, STICKER_8 ];
    }
}

const mapDbToFront = (allWishes: IWishCardDB[]): IWishCardFront[] => {
    return allWishes.map((wish) => {
        const [stickerUP = '', stickerDOWN = ''] = pictureToSticker(wish.picture) || [];
        return {
            ...wish,
            stickerUP: stickerUP,
            stickerDOWN: stickerDOWN
        };
    });
};

function stickerToPicture(sticker_choice: string[]) {
    if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_1, STICKER_5])) {
        return '1';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_1, STICKER_6])) {
        return '2';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_1, STICKER_7])) {
        return '3';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_1, STICKER_8])) {
        return '4';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_2, STICKER_5])) {
        return '5';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_2, STICKER_6])) {
        return '6';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_2, STICKER_7])) {
        return '7';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_2, STICKER_8])) {
        return '8';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_3, STICKER_5])) {
        return '9';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_3, STICKER_6])) {
        return '10';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_3, STICKER_7])) {
        return '11';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_3, STICKER_8])) {
        return '12';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_4, STICKER_5])) {
        return '13';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_4, STICKER_6])) {
        return '14';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_4, STICKER_7])) {
        return '15';
    } else if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_4, STICKER_8])) {
        return '16';    
    }
}


export {pictureToSticker, stickerToPicture, mapDbToFront};

// Assuming we have 4 top-left sticker and 4 bottom-right sticker
// We keep sticker choice as a string 1-16 in database
import { 
    STICKER_1_NAME,
    STICKER_2_NAME,
    STICKER_3_NAME,
    STICKER_4_NAME,
    STICKER_5_NAME,
    STICKER_6_NAME,
    STICKER_7_NAME,
    STICKER_8_NAME } from '@/params/wishCommand_params';
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

const mapSingleDbToFront = (wish: IWishCardDB): IWishCardFront => {
    const [stickerUP = '', stickerDOWN = ''] = pictureToSticker(wish.picture) || [];
    return {
        ...wish,
        stickerUP: stickerUP,
        stickerDOWN: stickerDOWN
    };
};

const STICKER_COMBINATIONS = {
    [JSON.stringify([STICKER_1_NAME, STICKER_5_NAME])]: '1',
    [JSON.stringify([STICKER_1_NAME, STICKER_6_NAME])]: '2',
    [JSON.stringify([STICKER_1_NAME, STICKER_7_NAME])]: '3',
    [JSON.stringify([STICKER_1_NAME, STICKER_8_NAME])]: '4',
    [JSON.stringify([STICKER_2_NAME, STICKER_5_NAME])]: '5',
    [JSON.stringify([STICKER_2_NAME, STICKER_6_NAME])]: '6',
    [JSON.stringify([STICKER_2_NAME, STICKER_7_NAME])]: '7',
    [JSON.stringify([STICKER_2_NAME, STICKER_8_NAME])]: '8',
    [JSON.stringify([STICKER_3_NAME, STICKER_5_NAME])]: '9',
    [JSON.stringify([STICKER_3_NAME, STICKER_6_NAME])]: '10',
    [JSON.stringify([STICKER_3_NAME, STICKER_7_NAME])]: '11',
    [JSON.stringify([STICKER_3_NAME, STICKER_8_NAME])]: '12',
    [JSON.stringify([STICKER_4_NAME, STICKER_5_NAME])]: '13',
    [JSON.stringify([STICKER_4_NAME, STICKER_6_NAME])]: '14',
    [JSON.stringify([STICKER_4_NAME, STICKER_7_NAME])]: '15',
    [JSON.stringify([STICKER_4_NAME, STICKER_8_NAME])]: '16'
  };
  
  function stickerToPicture(sticker_choice: string[]): string | undefined {
    return STICKER_COMBINATIONS[JSON.stringify(sticker_choice)];
  }
  

export {pictureToSticker, stickerToPicture, mapDbToFront, mapSingleDbToFront};

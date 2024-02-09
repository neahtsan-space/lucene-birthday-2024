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

function pictureToSticker(picture: string) {
    switch (picture) {
        case '1':
            return [ STICKER_1, STICKER_5 ];
        case '2':
            return STICKER_2;
        case '3':
            return STICKER_3;
        case '4':
            return STICKER_4;
        case '5':
            return STICKER_5;
        case '6':
            return STICKER_6;
        case '7':
            return STICKER_7;
        case '8':
            return STICKER_8;
        default:
            return STICKER_1;
    }
}

function stickerToPicture(sticker_choice: string[]) {
    if (JSON.stringify(sticker_choice) === JSON.stringify([STICKER_1, STICKER_5])) {
        return '1';
    }
    // Handle other cases
}


export {pictureToSticker, stickerToPicture};

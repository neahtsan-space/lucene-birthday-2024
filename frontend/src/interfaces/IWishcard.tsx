type IWishCardDB = {
    _id: string;
    name: string;
    wish: string;
    time: string;
    picture: string;
    cardNumber: number;
    borderColor: string;
    __v: number;
};

type IWishCardFront = {
    _id: string;
    name: string;
    wish: string;
    time: string;
    stickerUP: string;
    stickerDOWN: string;
    cardNumber: number;
    borderColor: string;
    __v: number;
};

type IWishCardPost = {
    name: string;
    wish: string;
    picture: string;
    borderColor: string;
};

export type { IWishCardDB, IWishCardFront, IWishCardPost }
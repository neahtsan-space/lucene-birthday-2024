type IWishCard = {
    _id: string;
    name: string;
    wish: string;
    time: string;
    stickerUp: string;
    stickerDown: string;
    cardNumber: number;
    borderColor: string;
    __v: number;
};

type IWishCardPost = {
    name: string;
    wish: string;
    stickerUp: string;
    stickerDown: string;
    borderColor: string;
};

export type { IWishCard, IWishCardPost }
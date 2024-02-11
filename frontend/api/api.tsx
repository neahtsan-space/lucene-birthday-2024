import { IWishCardDB, IWishCardPost } from '@/interfaces/IWishcard';
import *  as API_PATH from '@/params/api_params'; 

async function GetWishData(): Promise<IWishCardDB[]> {
    const response = await fetch(API_PATH.GET_ALL_WISH);
    const data: IWishCardDB[] = await response.json();
    return data;
  }

async function GetLastestFourWish(): Promise<IWishCardDB[]> {
    const response = await fetch(API_PATH.GET_LASTEST_FOUR_WISH);
    const data: IWishCardDB[] = await response.json();
    return data;
}


async function CreateWishCard(data: IWishCardPost): Promise<IWishCardPost> {
    const response = await fetch(API_PATH.POST_WISH, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const createdData: IWishCardPost = await response.json();
    return createdData;
}


export { GetWishData, GetLastestFourWish, CreateWishCard }
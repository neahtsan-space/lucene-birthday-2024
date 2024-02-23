'use server';

import { IWishCard, IWishCardPost } from '@/interfaces/IWishcard';
import *  as API_PATH from '@/params/api_params'; 

async function GetWishData(): Promise<IWishCard[]> {
    const response = await fetch(API_PATH.GET_ALL_WISH);
    const data: IWishCard[] = await response.json();
    return data;
  }

async function GetLastestFourWish(): Promise<IWishCard[]> {
    const response = await fetch(API_PATH.GET_LASTEST_FOUR_WISH);
    const data: IWishCard[] = await response.json();
    return data;
}

async function GetWishByName(name: string): Promise<IWishCard | null> {
    try {
        const encodedName = encodeURIComponent(name);
        const API_PATH_GET_WISH_BY_NAME = `${API_PATH.GET_WISH_BY_NAME}?name=${encodedName}`;

        const response = await fetch(API_PATH_GET_WISH_BY_NAME);

        if (!response.ok) {
            return null;
        }

        const data: IWishCard = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching wish card");
        return null;
    }
}



function CreateWishCard(wishCardObject: IWishCardPost) {

    return fetch(API_PATH.POST_WISH, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(wishCardObject),
    })
    .then(response => response.json().then(data => ({ status: response.status, body: data })))
    .catch(error => console.error('Error create wish card', error));
}


export { GetWishData, GetLastestFourWish, GetWishByName, CreateWishCard }
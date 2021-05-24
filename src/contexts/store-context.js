import React, {useEffect, useReducer} from 'react';
import storeReducer from "./store-reducer";
import img1 from './../assets/1.jpg'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.jpg'
import img4 from './../assets/4.jpg'
import img5 from './../assets/5.jpg'
import img6 from './../assets/6.jpg'
import img7 from './../assets/7.jpg'
import img8 from './../assets/8.jpg'

export const StoreContext = React.createContext(null);
let initialState = {
    boxes: [
        {id: 1, price: 200, title: 'Название подарка', description: 'Описание подарка', img: img1,counter:1},
        {id: 2, price: 280, title: 'Название подарка', description: 'Описание подарка', img: img2,counter:1},
        {id: 3, price: 400, title: 'Название подарка', description: 'Описание подарка', img: img3,counter:1},
        {id: 4, price: 290, title: 'Название подарка', description: 'Описание подарка', img: img4,counter:1},
        {id: 5, price: 210, title: 'Название подарка', description: 'Описание подарка', img: img5,counter:1},
        {id: 6, price: 120, title: 'Название подарка', description: 'Описание подарка', img: img6,counter:1},
        {id: 7, price: 300, title: 'Название подарка', description: 'Описание подарка', img: img7,counter:1},
        {id: 8, price: 250, title: 'Название подарка', description: 'Описание подарка', img: img8,counter:1},
    ],
    cartItems: [],
    photos:[
        {photo:img1},{photo:img2},{photo:img3},{photo:img4},{photo:img5},{photo:img6},{photo:img7},{photo:img8},
    ],


}
let cartElement = localStorage.getItem('item');
let storage = cartElement ? JSON.parse(cartElement) : [];
initialState = {...initialState, cartItems: storage}

export const StoreContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(storeReducer, initialState)
    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(state.cartItems))
    }, [state.cartItems])

    return <StoreContext.Provider value={{state, dispatch}}>
        {children}
    </StoreContext.Provider>
}
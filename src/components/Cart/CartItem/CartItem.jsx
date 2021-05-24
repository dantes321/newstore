import React, {useState} from 'react';
import s from './CartItem.module.scss'
import {changeCounterAC, removeFromCartAC} from "../../../contexts/store-reducer";
const CartItem = ({id, title, description, price, img,counter,dispatch,state}) => {
    let inputHandler = (e) => {
        dispatch(changeCounterAC(e.target.value,id))
    }

    let removeFromCart = () => {
        dispatch(removeFromCartAC(id))
    }

        return (
            <div className={s.cartItem}>
                <img src={img} alt=""/>
                <div className={s.description}>{description}</div>
                <div className={s.price}>{price}</div>
                <div className={s.counter}><button >-</button><input type="number" min={1} onChange={inputHandler} value={counter}/><button>+</button></div>
                <span onClick={removeFromCart} className={s.delete}> </span>
            </div>
        );



};

export default CartItem;
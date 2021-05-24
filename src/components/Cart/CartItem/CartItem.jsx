import React from 'react';
import s from './CartItem.module.scss'
const CartItem = ({id, title, description, price, img}) => {
    return (
        <div className={s.cartItem}>
            <img src={img} alt=""/>
            <div className={s.description}>{description}</div>
            <div className={s.price}>{price}</div>
            <div className={s.counter}><button >-</button><input type="number"/><button>+</button></div>
            <span>Delete</span>
        </div>
    );
};

export default CartItem;
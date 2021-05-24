import React from 'react';
import s from'./Boxes.module.scss'
import {addToCartAC} from "../../../contexts/store-reducer";

const Boxes = ({id, title, description, price, img,dispatch}) => {
    let addToCart = (e) => {
        e.preventDefault()
        dispatch(addToCartAC(id, title, description, price, img))
    }
    return (
        <div className={s.box}>
            <img src={img} alt="img"/>
            <div className={s.title}>{title}</div>
            <div className={s.price}>{price} грн</div>
            <a onClick={addToCart} href="#">Заказать</a>
        </div>
    );
};

export default Boxes;
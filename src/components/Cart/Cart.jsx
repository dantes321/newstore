import React, {useContext} from 'react';
import s from './Cart.module.scss'
import {StoreContext} from "../../contexts/store-context";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
    let {state} = useContext(StoreContext)
    let cartElement = state.cartItems.map(el => <CartItem id={el.id} title={el.title} description={el.description}
                                                          price={el.price} img={el.img}/>)
    if (state.cartItems.length === 0) {

        return (
            <div className={s.cart}>
                <div className={s.cartInner}>
                    <div className={s.title}>Корзина</div>
                    <div className={s.subtitle}>В корзине пусто</div>
                </div>
            </div>
        );
    } else
        return (
            <div className={s.cart}>
                <div className={s.cartInner}>
                    <div className={s.title}>Корзина</div>
                    <div className={s.cartNames}>
                        <span>Фото</span>
                        <span>Название</span>
                        <span>Цена</span>
                        <span>Колличество</span>
                        <span>Удалить</span>

                    </div>
                    {cartElement}
                    <div className={s.totalPrice}>Итого: ###</div>
                    <a href="#">Оформить заказ</a>
                </div>

            </div>
        );
};

export default Cart;
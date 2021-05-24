import React, {useContext} from 'react';
import s from './Cart.module.scss'
import {StoreContext} from "../../contexts/store-context";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
    let {state, dispatch} = useContext(StoreContext)
    let sumPricesArr = state.cartItems.map(el => el.price).reduce((a,b) => {
        return a+b
    },0);

    let cartElement = state.cartItems.map(el => <CartItem id={el.id} title={el.title} description={el.description}
                                                          price={el.price} img={el.img}
                                                          counter={el.counter} dispatch={dispatch} state={state}/>)
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
                    <div  className={s.cartNames}>
                        <span>Фото</span>
                        <span>Название</span>
                        <span>Цена</span>
                        <span>Колличество</span>
                        <span>Удалить</span>

                    </div>
                    {cartElement}
                    <div className={s.totalPrice}>Итого: {sumPricesArr} грн</div>
                    <a onClick={e => e.preventDefault()} href="#">Оформить заказ</a>
                </div>

            </div>
        );
};

export default Cart;
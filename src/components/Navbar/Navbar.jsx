import React, {useContext, useState} from 'react';
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import {StoreContext} from "../../contexts/store-context";

const Navbar = () => {
    let {state} = useContext(StoreContext)
    const [activeBurger, setActiveBurger] = useState(false)
    return (
        <div className={s.navbar}>
            <div className={s.navbarInner}>
                <div className={s.logo}>
                    <NavLink to="/store"><img
                        src="https://u20.plpstatic.ru/s/31iq7eq061/dbc8ba16910a9570ce96ab81888a74b6/9a928b3276e914a5a60e8dd6dd41e2c7.png"
                        alt=""/></NavLink>
                    <div className={s.title}><span>Сюрприз</span> боксы и <span>Подарочные</span> наборы</div>
                </div>
                {
                    activeBurger ?
                        <nav>
                            <img
                                src="https://u20.plpstatic.ru/s/31iq7eq061/dbc8ba16910a9570ce96ab81888a74b6/9a928b3276e914a5a60e8dd6dd41e2c7.png"
                                alt=""/>
                            <ul className={activeBurger ? `${s.ul} ${s.active}` : s.ul}>
                                <li><a href="#">Главная</a></li>
                                <li><a href="#">Конструктор</a></li>
                                <li><a href="#">Отзывы</a></li>
                                <li><a href="#">Галерея</a></li>
                                <li><a href="#">Доставка и оплата</a></li>
                                <li><a href="#">Сотрудничество</a></li>
                                <li><a href="#">Условия покупки</a></li>

                            </ul>
                        </nav> :
                        <nav>
                            <ul className={activeBurger ? `${s.ul} ${s.active}` : s.ul}>
                                <li><a href="#">Галерея фото</a></li>
                                <li><a href="#">Конструктор</a></li>
                                <li><a href="#">Отзывы</a></li>
                                <li><a href="#">Сотрудничество</a></li>
                            </ul>
                        </nav>
                }
                <NavLink to='/cart' className={s.cart}>
                    <img src="https://assets.webiconspng.com/uploads/2017/09/Shopping-Cart-PNG-Image-72455.png" alt=""/>
                    <div className={s.counter}>({state.cartItems.length})</div>
                </NavLink>
            </div>
            <div onClick={() => setActiveBurger(!activeBurger)}
                 className={activeBurger ? `${s.burger} ${s.active}` : s.burger}>
                <span></span>
            </div>
        </div>
    );
};

export default Navbar;
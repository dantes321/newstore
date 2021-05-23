import React, {useState} from 'react';
import s from './Navbar.module.scss'

const Navbar = () => {
    const [activeBurger,setActiveBurger] = useState(false)
    return (
        <div className={s.navbar}>
            <div className={s.navbarInner}>
                <div className={s.logo}>
                    <img src="#" alt=""/>
                    <div className={s.title}><span>Сюрприз</span> боксы и <span>Подарочные</span> наборы</div>
                </div>
                <nav className={activeBurger? `${s.nav} ${s.active}`: s.nav}>
                    <ul>
                        <li><a href="#">Галерея фото</a></li>
                        <li><a href="#">Конструктор</a></li>
                        <li><a href="#">Отзывы</a></li>
                        <li><a href="#">Сотрудничество</a></li>
                    </ul>
                </nav>
                <a href='#' className={s.cart}>
                    <img src="https://assets.webiconspng.com/uploads/2017/09/Shopping-Cart-PNG-Image-72455.png" alt=""/>
                    <div className={s.counter}>(0)</div>
                </a>
            </div>
            <div onClick={() => setActiveBurger(!activeBurger)} className={activeBurger? `${s.burger} ${s.active}`: s.burger}>
                <span></span>
            </div>
        </div>
    );
};

export default Navbar;
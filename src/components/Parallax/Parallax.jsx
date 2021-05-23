import React from 'react';
import s from './Parallax.module.scss'
const Parallax = () => {
    return (
        <div className={s.parallax}>
            <div className={s.parallaxBody}>
                <div className={s.title}>Lucky Box</div>
                <a href="#">Заказать подарок</a>
            </div>
        </div>
    );
};

export default Parallax;
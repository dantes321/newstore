import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerInner}>
                <ul>
                    <li><a href="#">ИНФОРМАЦИЯ</a></li>
                    <li><a href="#">Доставка и Оплата</a></li>
                    <li><a href="#">Условия Покупки</a></li>
                    <li><a href="#">Отзывы</a></li>
                    <li><a href="#">Карта сайта</a></li>
                </ul>
                <div className={s.contacts}>
                    <div>КОНТАКТЫ (ТЕЛЕФОН, VIBER)</div>
                    <div>096-41-332-620</div>
                    <div>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</div>
                    <div className={s.icons}>
                        <a href="#"><img src="https://icon-library.com/images/facebook-icon-black-and-white-vector/facebook-icon-black-and-white-vector-5.jpg" alt=""/></a>
                        <a href="#"><img src="https://i.pinimg.com/originals/69/74/b5/6974b5f9158cbe064b8e465e68e52eed.png" alt=""/></a>
                    </div>
                </div>
                    <img src="https://u20.plpstatic.ru/s/31iq7eq061/dbc8ba16910a9570ce96ab81888a74b6/9a928b3276e914a5a60e8dd6dd41e2c7.png" alt="logo"/>
            </div>
        </div>
    );
};

export default Footer;
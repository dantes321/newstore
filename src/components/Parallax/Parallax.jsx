import React from 'react';
import s from './Parallax.module.scss'
import {Link} from 'react-scroll'

const Parallax = () => {
    return (
        <div className={s.parallax}>
            <div className={s.parallaxBody}>
                <div className={s.title}>Lucky Box</div>
                <Link to="#store" smooth ={true} duration ={850}>Заказать подарок</Link>
            </div>
            <div className={s.parallaxFooter}>
                <div id='#store' className={s.socials}>
                    <a href="#"><img src="https://icon-library.com/images/facebook-icon-black-and-white-vector/facebook-icon-black-and-white-vector-5.jpg" alt=""/></a>
                    <a  href="#"><img src="https://i.pinimg.com/originals/69/74/b5/6974b5f9158cbe064b8e465e68e52eed.png" alt=""/></a>
                </div>
                <div  className={s.title}>All rights reserved.</div>
            </div>
        </div>
    );
};

export default Parallax;
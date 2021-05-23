import React from 'react';
import s from './Store.module.scss'
import Parallax from "../Parallax/Parallax";
import Boxes from "./Boxes/Boxes";
const Store = () => {
    return (
        <div className={s.store}>
            <Parallax />
            <div className={s.title}>Тематические <span>Сюрприз Боксы</span></div>
            <div className={s.boxes}>
                <Boxes />
            </div>

        </div>
    );
};

export default Store;
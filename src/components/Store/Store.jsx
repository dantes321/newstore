import React from 'react';
import s from './Store.module.scss'
import Parallax from "../Parallax/Parallax";
const Store = () => {
    return (
        <div className={s.store}>
            <Parallax />
        </div>
    );
};

export default Store;
import React, {useContext} from 'react';
import s from './Gallery.module.scss'
import {StoreContext} from "../../contexts/store-context";
import Photos from "./Photos/Photos";
import {NavLink} from "react-router-dom";

const Gallery = () => {
    const {state} = useContext(StoreContext);
    const photosEl = state.photos.map(el => <Photos photo ={el.photo}/>)
    return (
        <div className={s.gallery}>
            <div className={s.title}>Примеры наполнения сюрприз боксов ,
                фото с нашими клиентами и рабочие моменты нашего сервиса</div>
            <div className={s.photos}>
                {photosEl}
            </div>
            <NavLink to="/store">Вернуться в магазин</NavLink>
        </div>
    );
};

export default Gallery;
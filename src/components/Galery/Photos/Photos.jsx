import React from 'react';
import s from './Photos.module.scss'
const Photos = ({photo}) => {
    return (
        <div className={s.photos}>
            <img src={photo} alt=""/>
        </div>
    );
};

export default Photos;
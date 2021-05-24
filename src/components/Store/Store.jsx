import React, {useContext} from 'react';
import s from './Store.module.scss'
import Parallax from "../Parallax/Parallax";
import Boxes from "./Boxes/Boxes";
import {StoreContext} from "../../contexts/store-context";

const Store = () => {

    const {state, dispatch} = useContext(StoreContext)
    let boxEl = state.boxes.map((el, index) => <Boxes key={index} id={el.id} price={el.price} title={el.title}
                                                      description={el.description}
                                                      img={el.img}
                                                      dispatch={dispatch}
                                                      counter={el.counter}
                                                      state={state}/>)

    return (
        <div className={s.store}>
            <Parallax/>
            <div className={s.title}>Тематические <span>Сюрприз Боксы</span></div>
            <div className={s.boxes}>
                {boxEl}

            </div>

        </div>
    );
};

export default Store;
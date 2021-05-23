import React, {useReducer} from 'react';
import storeReducer from "./store-reducer";

export const StoreContext = React.createContext(null);
let initialState = {
    boxes:[
        {id:1,price:200,title:'Название подарка',description:'Описание подарка',img:''},
        {id:2,price:280,title:'Название подарка',description:'Описание подарка',img:''},
        {id:3,price:400,title:'Название подарка',description:'Описание подарка',img:''},
        {id:4,price:290,title:'Название подарка',description:'Описание подарка',img:''},
        {id:5,price:210,title:'Название подарка',description:'Описание подарка',img:''},
        {id:6,price:120,title:'Название подарка',description:'Описание подарка',img:''},
        {id:7,price:300,title:'Название подарка',description:'Описание подарка',img:''},
        {id:8,price:250,title:'Название подарка',description:'Описание подарка',img:''},
    ]
}

export const StoreContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(storeReducer,initialState)

    return <StoreContext.Provider value={{state,dispatch}}>
        {children}
    </StoreContext.Provider>
}
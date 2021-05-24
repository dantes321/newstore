const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CHANGE_COUNTER = 'CHANGE_COUNTER';

let storeReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_COUNTER:
            return {
                ...state,
                cartItems:state.cartItems.map(el => {
                    if(el.id === action.id){
                        el.counter = action.counter
                    }
                    return el;
                })

            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter(el => el.id!==action.id)
            }
        case ADD_TO_CART:
            let newItem = {
                id: action.id,
                title: action.title,
                description: action.description,
                price: action.price,
                img: action.img,
                counter:action.counter
            }
            return {
                ...state,
                cartItems: [...state.cartItems, newItem]
            }
        default:
            return state;
    }
}

export const addToCartAC = (id, title, description, price, img,counter) => ({
    type: ADD_TO_CART,
    id,
    title,
    description,
    price,
    img,
    counter
})
export const removeFromCartAC = (id) => ({type: REMOVE_FROM_CART, id})
export const changeCounterAC = (counter,id) => ({type:CHANGE_COUNTER,counter,id})
export default storeReducer;
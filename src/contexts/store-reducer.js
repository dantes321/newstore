const ADD_TO_CART = 'ADD_TO_CART';

let storeReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(state.cartItems)
            let newItem = {
                id: action.id,
                title: action.title,
                description: action.description,
                price: action.price,
                img: action.img
            }
            return {
                ...state,
                cartItems:[...state.cartItems,newItem]
            }
        default:
            return state;
    }
}

export const addToCartAC = (id, title, description, price, img) => ({
    type: ADD_TO_CART,
    id,
    title,
    description,
    price,
    img
})

export default storeReducer;
const cartReducer = (state =[], action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            return state.filter(cartItems=> cartItems.id !== action.payload.id)
    }
    return state;
}
export default cartReducer
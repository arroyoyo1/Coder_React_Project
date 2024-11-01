export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state));
}

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}


const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
        const { id, quantity } = action.payload;
        const productInCart = state.findIndex(item => item.id === id);

        if (productInCart >= 0) {
            const newState = [
                ...state.slice(0, productInCart),
                {
                    ...state[productInCart], 
                    quantity: state[productInCart].quantity + quantity
                },
                ...state.slice(productInCart + quantity)
            ]

            updateLocalStorage(newState);
            return newState;
        }

        const newState = [
            ...state,
            {
                ...action.payload, // product
                quantity: quantity
            }
        ]

        updateLocalStorage(newState);
        return newState;
    },
    [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
        const id = action.payload;
        console.log('id que me llego: '+id);
        const newState = state.filter(item => item.id !== id);
        
        updateLocalStorage(newState);
        return newState;
    },
    [CART_ACTION_TYPES.CLEAR_CART]: () => {
        updateLocalStorage([])
        return [];
    }
}

export const cartReducer = (state, action) => {
    const { type: actionType } = action;
    const updateState = UPDATE_STATE_BY_ACTION[actionType];

    return updateState ? updateState(state, action) : state;
}
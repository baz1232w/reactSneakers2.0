import {getLocalStorage} from "../../utilities/getLocalStorage.js";

const ADD_TO_CART = 'cart/addToCart',
    DELETED_FROM_CART = 'cart/deletedFromCart',
    CLEAN_CART = 'cart/cleanCart',
    TOGGLE_CART = 'cart/toggleCart',
    SET_TOTAL_PRICE = 'cart/setTotalPrice'

const
    initialState = {
        items: getLocalStorage(),
        totalPrice: 0,
        isOpen: false,
    }

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        case DELETED_FROM_CART:
            return {
                ...state,
                items: [...state.items].filter(el => el.id !== action.payload.id),
            }
        case CLEAN_CART:
            return {
                items: [],
                totalPrice: 0
            }
        case TOGGLE_CART:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case SET_TOTAL_PRICE:
            return {
                ...state,
            }
    }
    return state
}

export const toggleCart = () => ({
    type: TOGGLE_CART
})

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const deleteFormCart = (item) => {
    return {
        type: DELETED_FROM_CART,
        payload: item
    }
}

export const cleanCart = () => ({
    type: CLEAN_CART
})

export const setTotalPrice = () => ({type: SET_TOTAL_PRICE})






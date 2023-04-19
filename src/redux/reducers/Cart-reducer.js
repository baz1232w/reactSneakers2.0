import {getLocalStorage, getTotalPrice} from "../../utilities/getLocalStorage.js";

const ADD_TO_CART = 'cart/addToCart',
    DELETED_FROM_CART = 'cart/deletedFromCart',
    CLEAN_CART = 'cart/cleanCart',
    TOGGLE_CART = 'cart/toggleCart'

const
    initialState = {
        items: getLocalStorage(),
        totalPrice: getTotalPrice(),
        isOpen: false,
    }

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
                totalPrice: state.totalPrice += action.payload.price
            }
        case DELETED_FROM_CART:
            return {
                ...state,
                items: [...state.items].filter(el => el.id !== action.payload.id),
                totalPrice: state.totalPrice -= action.payload.price
            }
        case CLEAN_CART:
            return{
                items:[],
                totalPrice: 0
            }
        case TOGGLE_CART:
            return {
                ...state,
                isOpen: !state.isOpen
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







import {api} from "../../axios/axios.js";

const FETCH_ITEMS_SUCCESS = 'mainPage/fetchItemsSuccess'
const FETCH_ITEMS = 'mainPage/fetchItems'
const FETCH_ITEMS_ERROR = 'mainPage/fetchItemsError'
const TOGGLE_PREFER = 'mainPage/togglePrefer'
const ADD_TO_CART = 'mainPage/addToCart'

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    totalPrefer: 0
}

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_ITEMS_SUCCESS:
            let num = 0;
            action.payload.forEach(el => {
                el.isPrefer ? num++ : false
            })
            return {
                ...state,
                items: action.payload,
                isLoading: false,
                totalPrefer: num
            }
        case FETCH_ITEMS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case TOGGLE_PREFER:
            let total = state.totalPrefer
            return {
                ...state,
                items: state.items.map(el => {
                    if (el.id === action.payload) {
                        el.isPrefer = !el.isPrefer
                        if (el.isPrefer) {
                            total++
                        } else {
                            total--
                        }
                    }

                    return el
                }),
                totalPrefer: total
            }
        case ADD_TO_CART:
            return {
                ...state,
                items: state.items.map(el => {
                    if (el.id === action.payload) {
                        el.isAdded = !el.isAdded
                    }
                    return el
                })
            }
    }
    return state
}


export const setAddedToCart = (id, item) => async (dispatch) => {
    const data = {...item}
    data.isAdded = !data.isAdded
    dispatch({type: ADD_TO_CART, payload: id})
    await api.changeItem(id, data)
}

export const fetchItems = () => async (dispatch) => {
    dispatch({type: FETCH_ITEMS})
    try {
        const items = await api.getItems()
        dispatch({type: FETCH_ITEMS_SUCCESS, payload: items})
    } catch (error) {
        dispatch({type: FETCH_ITEMS_ERROR, payload: error.text})
    }

}

export const setPreferItem = (id, item) => async (dispatch) => {
    const data = {...item}
    data.isPrefer = !data.isPrefer
    dispatch({type: TOGGLE_PREFER, payload: id})
    await api.changeItem(id, data)
}



import {api} from "../../axios/axios.js";

const SET_ITEMS = 'mainPage/setItem'
const TOGGLE_PREFER = 'mainPage/togglePrefer'
const initialState = {
    items: []
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case TOGGLE_PREFER:
            return {
                ...state,
                items: state.items.map(el => {
                    if(el.id === action.payload){
                        el.isPrefer = !el.isPrefer
                        return el
                    }else{
                        return el
                    }
                })
            }
    }
    return state
}

const setItemAC = (items) => {
    return {
        type: SET_ITEMS,
        payload: items
    }
}


const togglePrefer = (id) => {
    return {
        type: TOGGLE_PREFER,
        payload: id
    }
}

export const fetchItems = () => async (dispatch) => {
    const items = await api.getItems()
    dispatch(setItemAC(items))
}

export const setPreferItem = (id, item) => async (dispatch) => {
    item.isPrefer = !item.isPrefer
    await api.preferItems(id, item)
    dispatch(togglePrefer(id))
}

export default mainPageReducer
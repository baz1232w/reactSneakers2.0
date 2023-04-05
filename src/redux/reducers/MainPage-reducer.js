import {api} from "../../axios/axios.js";

const SET_ITEMS = 'mainPage/set-item'

const initialState = {
    items: []
}

const mainPageReducer = (state = initialState, action) => {
  switch (action.type){
      case SET_ITEMS:
          return {
              ...state,
              items: action.payload
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

export const fetchItems = () => async (dispatch) =>{
    const items = await api.getItems()
    dispatch(setItemAC(items))
}


export default mainPageReducer
import {combineReducers,applyMiddleware,legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk"
import {mainPageReducer} from "./reducers/MainPage-reducer.js";
import {cartReducer} from "./reducers/Cart-reducer.js";
const reducers = combineReducers({
    mainPage: mainPageReducer,
    cart: cartReducer
})

const store = createStore(reducers,applyMiddleware(thunk))

window.store = store

export default store


import {combineReducers,applyMiddleware,legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk"
import mainPageReducer from "./reducers/MainPage-reducer.js";
const reducers = combineReducers({
    mainPage: mainPageReducer
})

const store = createStore(reducers,applyMiddleware(thunk))

window.store = store

export default store


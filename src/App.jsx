import './App.module.css'
import MainPageContainer from "./components/Main/MainPageContainer.jsx";
import HeaderContainer from "./components/Header/Header.jsx"
import s from "./App.module.css"
import CartContainer from "./components/Cart/CartContainer.jsx";
import PreferPage from "./components/PreferPage/PreferPage.jsx";
import {Route, Routes} from "react-router-dom";
import {HistoryPage} from "./components/HistoryPage/HistoryPage.jsx";
import React from "react";
import {useSelector} from "react-redux";

function App() {
    const isOpen = useSelector(state => state.cart.isOpen)


    return (
        <div className={s.background}>
            <div className={isOpen ? s.block : null}></div>
            <div className={s.container}>
                <HeaderContainer/>
                <Routes>
                    <Route element={<PreferPage/>} path={'/prefer'}/>
                    <Route element={<MainPageContainer/>} path={'/main'}/>
                    <Route element={<MainPageContainer/>} path={'*'}/>
                    <Route element={<HistoryPage/>} path={'/history'}/>
                </Routes>
                <CartContainer/>
            </div>
        </div>
    )
}

export default App

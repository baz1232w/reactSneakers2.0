import './App.module.css'
import MainPageContainer from "./components/Main/MainPageContainer.jsx";
import HeaderContainer from "./components/Header/Header.jsx"
import s from "./App.module.css"
import CartContainer from "./components/Cart/CartContainer.jsx";
import PreferPage from "./components/PreferPage/PreferPage.jsx";
import {Route, Routes} from "react-router-dom";
import HistoryPage from "./components/HistoryPage/HistoryPage.jsx";

function App() {
    return (
        <div className={s.background}>
            <div className={s.container}>
                <HeaderContainer/>
                <Routes>
                    <Route element={<PreferPage/>} path={'/prefer'}/>
                    <Route element={<MainPageContainer/>} path={'/main'}/>
                    <Route element={<HistoryPage/>} path={'/history'}/>
                </Routes>
                <CartContainer/>
            </div>
        </div>
    )
}

export default App

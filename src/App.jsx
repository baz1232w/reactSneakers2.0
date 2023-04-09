import './App.module.css'
import MainPageContainer from "./components/Main/MainPageContainer.jsx";
import HeaderContainer from "./components/Header/Header.jsx"
import s from "./App.module.css"
import CartContainer from "./components/Cart/CartContainer.jsx";

function App() {
    return (
        <div className={s.background}>
            <div className={s.container}>
                <HeaderContainer/>
                <MainPageContainer/>
                <CartContainer/>
            </div>
        </div>
    )
}

export default App

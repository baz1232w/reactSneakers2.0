import './App.module.css'
import MainPageContainer from "./components/Main/MainPageContainer.jsx";
import {Header} from "./components/Header/Header.jsx"
import s from "./App.module.css"

function App() {
    return (
        <div className={s.background}>
            <div className={s.container}>
                <Header/>
                <MainPageContainer/>
            </div>
        </div>
    )
}

export default App

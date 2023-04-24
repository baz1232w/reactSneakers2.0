import React, {useEffect, useState} from 'react';
import {setAddedToCart, fetchItems, setPreferItem} from '../../redux/reducers/MainPage-reducer.js';
import {connect} from 'react-redux';
import {Slider} from './Slider/Slider.jsx';
import s from './Main.module.css'
import {Items} from "./Items/Items.jsx";
import {Search} from "./Search/Search.jsx";
import {addToCart, deleteFormCart} from "../../redux/reducers/Cart-reducer.js";

const MainPageContainer = (props) => {

    useEffect(() => {
        props.fetchItems()
    }, [])

    const [inputText,setInputText] = useState('')

    const handleInputText = (e) => {
        setInputText(e.target.value)
    }

    let filteredItems = props.items.filter(el => {
        if(!setInputText){
            return el
        }else{
            return el.tittle.toLowerCase().includes(inputText.toLowerCase())
        }
    })


    return (
        <div className={s.container}>
            <Slider/>
            <Search inputText={inputText} handleInputText={handleInputText}/>
            <Items {...props} items={filteredItems}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.mainPage.items,
    isLoading: state.mainPage.isLoading,
    error: state.mainPage.error
})

export default connect(mapStateToProps,{
    fetchItems,
    setPreferItem,
    addToCart,
    deleteFormCart,
    setAddedToCart,
})(MainPageContainer)
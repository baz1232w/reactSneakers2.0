import React from 'react';
import {Item} from "../Main/Items/Item/item";
import {connect} from "react-redux";
import s from '../Main/Main.module.css'
import {setAddedToCart, setPreferItem} from "../../redux/reducers/MainPage-reducer.js";
import {addToCart, deleteFormCart} from "../../redux/reducers/Cart-reducer.js";
import {EmptyPage} from "../EmptyPage/EmptyPage.jsx";


const PreferPage = ({totalPrefer, items, setPreferItem, addToCart, deleteFormCart, setAddedToCart,}) => {

    if(!totalPrefer){
        return <EmptyPage/>
    }

    return (
        <div className={s.container}>
            <h2>Мои закладки</h2>
            <div className={s.itemsList}>
                {items.map(el => {
                    if (el.isPrefer) {
                        return (
                        <Item setAddedToCart={()=> setAddedToCart(el.id,el)} deleteItem={()=> deleteFormCart(el)} addToCart={()=> addToCart(el)} togglePrefer={() => {setPreferItem(el.id, el)
                        }} key={el.id} el={el}/>
                        )
                    }
                })}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    items: state.mainPage.items,
    totalPrefer: state.mainPage.totalPrefer
})

export default connect(mapStateToProps, {
    setPreferItem,
    addToCart,
    deleteFormCart,
    setAddedToCart,
})(PreferPage)

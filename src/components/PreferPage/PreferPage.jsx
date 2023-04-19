import React from 'react';
import {Item} from "../Main/Items/Item/item";
import {connect} from "react-redux";
import s from '../Main/Main.module.css'
import {setAddedToCart, setPreferItem} from "../../redux/reducers/MainPage-reducer.js";
import {addToCart, deleteFormCart} from "../../redux/reducers/Cart-reducer.js";


const PreferPage = ({items, setPreferItem, addToCart, deleteFormCart, setAddedToCart,}) => {

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
    items: state.mainPage.items
})

export default connect(mapStateToProps, {
    setPreferItem,
    addToCart,
    deleteFormCart,
    setAddedToCart,
})(PreferPage)

import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Item} from "../Main/Items/Item/item";

const CartContainer = (props) => {

    useEffect(()=>{
        const items = JSON.stringify(props.items)
       const totalPrice = JSON.stringify(props.totalPrice)
        localStorage.setItem('cart',items)
        localStorage.setItem('totalPrice',totalPrice)

    },[props.items])

    return (
        <div>
            {props.items.map(el => {
                return(
                    <Item key={el.id} el={el}/>
                )
            })}
            <h2>{props.totalPrice}</h2>
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.cart.items,
    totalPrice: state.cart.totalPrice
})

export default connect(mapStateToProps,{
})(CartContainer)
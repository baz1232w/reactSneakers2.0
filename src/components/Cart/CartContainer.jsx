import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Item} from "../Main/Items/Item/item";
import {cleanCart} from "../../redux/reducers/Cart-reducer.js";
import {setAddedToCart} from "../../redux/reducers/MainPage-reducer.js";

const CartContainer = (props) => {

    useEffect(() => {
        const items = JSON.stringify(props.items)
        const totalPrice = JSON.stringify(props.totalPrice)
        localStorage.setItem('cart', items)
        localStorage.setItem('totalPrice', totalPrice)

    }, [props.items])

    const getOrder = async () => {
        const json = localStorage.getItem('history')
        if(json){
            localStorage.setItem('history',JSON.stringify([...JSON.parse(json),...props.items]))
        } else{
            localStorage.setItem('history',JSON.stringify(props.items))
        }

        localStorage.setItem('cart',JSON.stringify([]))
        localStorage.setItem('totalPrice',JSON.stringify(0))
        await props.items.forEach(el=>{
            setTimeout(()=>{
                props.setAddedToCart(el.id,el)
                console.log('fff')
            },2000)
        })

        props.cleanCart()
    }

    return (
        <div>
            {props.items.map(el => {
                return (
                    <Item key={el.id} el={el}/>
                )
            })}
            <h2>{props.totalPrice}</h2>
            <button onClick={getOrder}>ORDER</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.cart.items,
    totalPrice: state.cart.totalPrice
})

export default connect(mapStateToProps, {
    cleanCart,
    setAddedToCart,
})(CartContainer)
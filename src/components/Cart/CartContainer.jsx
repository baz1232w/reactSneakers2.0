import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {cleanCart, deleteFormCart, toggleCart} from "../../redux/reducers/Cart-reducer.js";
import {setAddedToCart} from "../../redux/reducers/MainPage-reducer.js";
import s from './Cart.module.css'
import {CartItem} from "./CartItem/CartItem.jsx";
import {EmptyPage} from "../EmptyPage/EmptyPage";

const CartContainer = ({isOpen, toggleCart,deleteFormCart,setAddedToCart, ...props}) => {

    useEffect(() => {
        const items = JSON.stringify(props.items)
        const totalPrice = JSON.stringify(props.totalPrice)
        localStorage.setItem('cart', items)
        localStorage.setItem('totalPrice', totalPrice)

    }, [props.items])

    const getOrder = async () => {
        const json = localStorage.getItem('history')
        if (json) {
            localStorage.setItem('history', JSON.stringify([...JSON.parse(json), ...props.items]))
        } else {
            localStorage.setItem('history', JSON.stringify(props.items))
        }

        localStorage.setItem('cart', JSON.stringify([]))
        localStorage.setItem('totalPrice', JSON.stringify(0))
        await props.items.forEach(el => {
            setTimeout(() => {
                props.setAddedToCart(el.id, el)
                console.log('fff')
            }, 2000)
        })

        props.cleanCart()
    }


    return (
        <div className={s.cart + ' ' + (isOpen ? s.open : s.closed)}>
            <div className={s.flex}>
                <div>
                    <span onClick={toggleCart}>Back-></span>
                    <h2>Корзина</h2>
                    {props.items.length === 0 ?
                        <EmptyPage/>
                        :
                        <>
                            {props.items.map(el => {
                                return (
                                    <CartItem key={el.id} el={el} deleteItem={()=> {deleteFormCart(el)}} setAddedToCart={()=> setAddedToCart(el.id,el)}/>
                                )
                            })}
                        </>
                    }

                </div>
                <div>
                    <div className={s.totalPrice}>
                        <span>Итого...</span>
                        <span><b>{props.totalPrice} грн</b></span>
                    </div>
                    <button className={s.orderBtn} onClick={getOrder} disabled={props.totalPrice <= 0}>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.cart.items,
    isOpen: state.cart.isOpen,
    totalPrice: state.cart.totalPrice
})

export default connect(mapStateToProps, {
    cleanCart,
    setAddedToCart,
    toggleCart,
    deleteFormCart
})(CartContainer)
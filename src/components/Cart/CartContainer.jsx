import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {cleanCart, deleteFormCart, setTotalPrice, toggleCart} from "../../redux/reducers/Cart-reducer.js";
import {setAddedToCart} from "../../redux/reducers/MainPage-reducer.js";
import s from './Cart.module.css'
import {CartItem} from "./CartItem/CartItem.jsx";
import {EmptyPage} from "../EmptyPage/EmptyPage";

const CartContainer = ({isOpen, toggleCart, deleteFormCart, setAddedToCart, setTotalPrice, ...props}) => {

    useEffect(() => {
        const items = JSON.stringify(props.items)
        localStorage.setItem('cart', items)
        setTotalPrice()
    }, [props.items])

    const getOrder = async () => {
        const json = localStorage.getItem('history')
        if (json) {
            localStorage.setItem('history', JSON.stringify([...JSON.parse(json), ...props.items]))
        } else {
            localStorage.setItem('history', JSON.stringify(props.items))
        }

        localStorage.setItem('cart', JSON.stringify([]))
        props.items.forEach(el => {
            setAddedToCart(el.id, el)
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
                                    <CartItem key={el.id} el={el} deleteItem={() => {
                                        deleteFormCart(el)
                                    }} setAddedToCart={() => setAddedToCart(el.id, el)}/>
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
                    <button className={s.orderBtn} onClick={getOrder} disabled={props.totalPrice <= 0}>Оформить заказ
                    </button>
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
    deleteFormCart,
    setTotalPrice
})(CartContainer)
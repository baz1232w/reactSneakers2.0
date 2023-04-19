import React from 'react';
import s from './Header.module.css'
import logo from '../../assets/header/logo.png'
import {CartIcons} from "../../assets/header/icons/CartIcons.jsx";
import {HartIcons} from "../../assets/header/icons/HartIcons";
import {ProfileIcon} from "../../assets/header/icons/ProfileIcon.jsx";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {toggleCart} from "../../redux/reducers/Cart-reducer.js";

const HeaderContainer = ({totalPrice,totalPrefer,toggleCart}) => {
    return (
        <div className={s.header}>
                <div className={s.headers}>
                    <NavLink to={'/main'}>
                        <img className={s.logo} src={logo} alt="logo"/>
                    </NavLink>
                    <div>
                        <h1>React Sneakers</h1>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className={s.navigation}>
                    <CartIcons fun={toggleCart}/>
                    <span>{totalPrice}</span>
                    <NavLink to={'/prefer'}><HartIcons/></NavLink>
                    <span>{totalPrefer}</span>
                    <NavLink to={'/history'}><ProfileIcon/></NavLink>
                </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    totalPrice: state.cart.totalPrice,
    totalPrefer: state.mainPage.totalPrefer
})

export default connect(mapStateToProps,{
    toggleCart
})(HeaderContainer)


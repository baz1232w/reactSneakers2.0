import React from 'react';
import s from './Header.module.css'
import logo from '../../assets/header/logo.png'
import {CartIcons} from "../../assets/header/icons/CartIcons.jsx";
import {HartIcons} from "../../assets/header/icons/HartIcons";
import {ProfileIcon} from "../../assets/header/icons/ProfileIcon.jsx";
import {connect} from "react-redux";

const HeaderContainer = ({totalPrice,totalPrefer}) => {
    return (
        <div className={s.header}>
                <div className={s.headers}>
                    <img className={s.logo} src={logo} alt="logo"/>
                    <div>
                        <h1>React Sneakers</h1>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className={s.navigation}>
                    <CartIcons/>
                    <span>{totalPrice}</span>
                    <HartIcons/>
                    <span>{totalPrefer}</span>
                    <ProfileIcon/>
                </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    totalPrice: state.cart.totalPrice,
    totalPrefer: state.mainPage.totalPrefer
})

export default connect(mapStateToProps,{

})(HeaderContainer)


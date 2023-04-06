import React from 'react';
import s from './Header.module.css'
import logo from '../../assets/header/logo.png'
import {CartIcons} from "../../assets/header/icons/CartIcons.jsx";
import {HartIcons} from "../../assets/header/icons/HartIcons";
import {ProfileIcon} from "../../assets/header/icons/ProfileIcon.jsx";

export const Header = () => {
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
                    <span>5999</span>
                    <HartIcons/>
                    <ProfileIcon/>
                </div>
        </div>
    );
};


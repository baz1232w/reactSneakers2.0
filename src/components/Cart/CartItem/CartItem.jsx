import React from 'react';
import {IonIcon} from "@ionic/react";
import s from '../Cart.module.css'
import {closeOutline} from "ionicons/icons";

export const CartItem = ({el,deleteItem,setAddedToCart}) => {
    return (
        <div className={s.cartItem}>
            <img src={el.img} alt={el.tittle}/>
            <div>
                <p>Мужские Кроссовки</p>
                <p>{el.tittle}</p>
                <p><b>{el.price} грн</b></p>
            </div>
            <IonIcon icon={closeOutline} onClick={()=>{
                deleteItem();
                setAddedToCart();
            }}></IonIcon>

        </div>
    );
};


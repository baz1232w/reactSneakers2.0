import React from 'react';
import s from '../../Main.module.css'
import {IonIcon} from '@ionic/react'
import {heart, heartOutline, addOutline, checkmarkOutline} from "ionicons/icons"

export const Item = ({el, addToCart, togglePrefer, setAddedToCart, deleteItem, ...props}) => {
    return (
        <div className={s.item}>
            <div className={s.imgContainer}>
                {props.history ?
                    null
                    :
                    el.isPrefer
                        ?
                        <span className={s.prefer}><IonIcon onClick={togglePrefer} icon={heart}></IonIcon></span>
                        :
                        <span className={s.preferBtn}><IonIcon onClick={togglePrefer}
                                                               icon={heartOutline}></IonIcon></span>
                }
                <img className={s.sneakersImage} src={el.img} alt={el.tittle}/>
            </div>
            <div className={s.disription}>
                <p>Мужские кроссовки</p>
                <p>{el.tittle}</p>
            </div>
            <div className={s.priceZone}>
                <div>
                    <p className={s.priceHeader}>Цена</p>
                    <p className={s.price}>{el.price}</p>
                </div>
                <div className={s.btnAdd}>
                    {props.history ?
                        null
                        :
                        <IonIcon className={el.isAdded ? s.added : null} onClick={() => {
                            if (!el.isAdded) {
                                addToCart()
                                setAddedToCart()
                            } else {
                                deleteItem()
                                setAddedToCart()
                            }
                        }
                        } icon={el.isAdded ? checkmarkOutline : addOutline}></IonIcon>}
                </div>
            </div>
        </div>
    );
};


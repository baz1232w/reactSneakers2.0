import React from 'react';
import s from '../../Main.module.css'

export const Item = (props) => {
    return (
        <div className={s.item}>
            <button onClick={props.togglePrefer} className={props.isPrefer ? s.unPrefer : s.setPrefer}>Prefer</button>
            <img className={s.sneakersImage} src={props.img} alt={props.tittle}/>
            <p>Мужские кроссовки</p>
            <p>{props.tittle}</p>
            <div className={s.priceZone}>
                <div>
                    <p className={s.priceHeader}>Цена</p>
                    <p className={s.price}>{props.price}</p>
                </div>
                <div className={s.btnAdd}>
                    <button>Add</button>
                </div>
            </div>
        </div>
    );
};


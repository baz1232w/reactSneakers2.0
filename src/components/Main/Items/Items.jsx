import React, {useEffect} from 'react';
import s from '../Main.module.css'
import {Item} from "./Item/item.jsx";

export const Items = ({items, fetchItems, setPreferItem}) => {

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <div className={s.items}>
            <div className={s.itemsHeader}>
                <h2>Все кроссовки</h2>
                <input type="text" placeholder='Поиск'/>
            </div>
            <div className={s.itemsList}>
                {items.map(el => {
                    return (
                        <Item togglePrefer={() => setPreferItem(el.id, el)} key={el.id} img={el.img} tittle={el.tittle}
                              price={el.price} isPrefer={el.isPrefer}/>
                    )
                })}
            </div>
        </div>
    );
};


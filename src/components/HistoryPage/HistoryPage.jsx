import React, {useEffect, useState} from 'react';
import {Item} from "../Main/Items/Item/item";
import s from '../Main/Main.module.css'
import {EmptyPage} from "../EmptyPage/EmptyPage";

export const HistoryPage = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const json = localStorage.getItem('history')
        if (json) {
            setItems(JSON.parse(json))
        }
    }, [])

    if (!items.length) {
        return <EmptyPage/>
    }

    return (
        <div className={s.container}>
            <h2>Мои покупки</h2>
            <div className={s.itemsList}>
                {items.map(el => {
                    return <Item key={el.id + Math.random()} el={el} history={true}/>
                })}
            </div>
        </div>
    );
};


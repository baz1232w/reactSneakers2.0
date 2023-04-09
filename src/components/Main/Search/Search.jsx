import React from 'react';
import s from "../Main.module.css";

export const Search = (props) => {
    return (
        <div className={s.itemsHeader}>
            <h2>Все кроссовки</h2>
            <input type="text" placeholder='Поиск'/>
        </div>
    );
};


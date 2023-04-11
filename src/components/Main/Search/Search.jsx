import React from 'react';
import s from "../Main.module.css";

export const Search = ({inputText,handleInputText}) => {
    return (
        <div className={s.itemsHeader}>
            <h2>Все кроссовки</h2>
            <input type="text" value={inputText} onChange={(e)=> handleInputText(e)} placeholder='Поиск'/>
        </div>
    );
};


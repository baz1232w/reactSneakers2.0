import React from 'react';
import s from "../Main.module.css";
import {IonIcon} from "@ionic/react";
import {searchOutline} from "ionicons/icons";

export const Search = ({inputText,handleInputText}) => {
    return (
        <div className={s.itemsHeader}>
            <h2>Все кроссовки</h2>
            <div className={s.searchContainer}>
                <span><IonIcon class={s.searchIcon} icon={searchOutline}></IonIcon></span>
                <input className={s.search} type="text" value={inputText} onChange={(e)=> handleInputText(e)} placeholder='Поиск...'/>
            </div>
        </div>
    );
};


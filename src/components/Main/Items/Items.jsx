import React from 'react';
import s from '../Main.module.css'
import {Item} from "./Item/item.jsx";

export const Items = ({items, setPreferItem,isLoading,error,addToCart,deleteFormCart,setAddedToCart}) => {

    if(isLoading){
        return <div>Loading</div>
    }

    if(error){
        return <div>{error}</div>
    }

    return (
        <div className={s.items}>

            <div className={s.itemsList}>
                {items.map(el => {
                    return (
                        <Item setAddedToCart={()=> setAddedToCart(el.id,el)} deleteItem={()=> deleteFormCart(el)} addToCart={()=> addToCart(el)} togglePrefer={() => {setPreferItem(el.id, el)
                        }} key={el.id} el={el}/>
                    )
                })}
            </div>
        </div>
    );
};


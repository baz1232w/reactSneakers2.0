import React from 'react';
import s from '../../Main.module.css'

export const Item = ({el,addToCart,togglePrefer,setAddedToCart,deleteItem}) => {

    return (
        <div className={s.item}>
            <button onClick={togglePrefer} className={el.isPrefer ? s.unPrefer : s.setPrefer}>Prefer</button>
            <img className={s.sneakersImage} src={el.img} alt={el.tittle}/>
            <p>Мужские кроссовки</p>
            <p>{el.tittle}</p>
            <div className={s.priceZone}>
                <div>
                    <p className={s.priceHeader}>Цена</p>
                    <p className={s.price}>{el.price}</p>
                </div>
                <div className={s.btnAdd}>
                    <button className={el.isAdded ? s.unPrefer : s.setPrefer} onClick={()=>{
                        if(!el.isAdded){
                            addToCart()
                            setAddedToCart()
                        }else{
                            deleteItem()
                            setAddedToCart()
                        }
                    }
                    }>Add</button>
                </div>
            </div>
        </div>
    );
};


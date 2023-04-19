import React from 'react';
import s from '../../Main.module.css'

export const Item = ({el,addToCart,togglePrefer,setAddedToCart,deleteItem,...props}) => {

    return (
        <div className={s.item}>
            <div className={s.imgContainer}>
                {props.history ?
                    null
                    :
                    <button onClick={togglePrefer} className={s.btnPrefer + ' ' + (el.isPrefer ? s.unPrefer : s.setPrefer  )}>{el.isPrefer ? 'unPrefer' : 'Prefer'}</button>
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
                        <button className={el.isAdded ? s.unPrefer : s.setPrefer} onClick={()=>{
                            if(!el.isAdded){
                                addToCart()
                                setAddedToCart()
                            }else{
                                deleteItem()
                                setAddedToCart()
                            }
                        }
                        }>{el.isAdded ? 'Delete' : 'Add'}</button>
                    }


                </div>
            </div>
        </div>
    );
};


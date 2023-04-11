import React, {useEffect, useState} from 'react';
import {Item} from "../Main/Items/Item/item";
import {connect} from "react-redux";

const HistoryPage = (props) => {
    const [items,setItems] = useState([])
    useEffect(()=>{
        const json = localStorage.getItem('history')
        if(json){
            setItems(JSON.parse(json))
        }
    },[])

    return (
        <div>
            <h2>Мои покупки</h2>
            {items.map(el=>{
                    return <Item key={el.id} el={el}/>
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.mainPage.items
})

export default connect(mapStateToProps,{})(HistoryPage)

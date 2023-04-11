import React from 'react';
import {Item} from "../Main/Items/Item/item";
import {connect} from "react-redux";

const HistoryPage = ({items}) => {
    return (
        <div>
            <h2>Мои покупки</h2>
            {items.map(el=>{
                if(el.isOrdered){
                    return <Item el={el}/>
                }
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.mainPage.items
})

export default connect(mapStateToProps,{})(HistoryPage)

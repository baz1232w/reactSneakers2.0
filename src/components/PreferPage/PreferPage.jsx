import React from 'react';
import {Item} from "../Main/Items/Item/item";
import {connect} from "react-redux";

const PreferPage = ({items}) => {

    return (
        <>
            <h2>Мои закладки</h2>
            <div>
                {items.map(el => {
                    if (el.isPrefer) {
                        return (
                            <Item el={el}/>
                        )
                    }
                })}
            </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    items: state.mainPage.items
})

export default connect(mapStateToProps, {})(PreferPage)

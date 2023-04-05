import React, {useEffect} from 'react';
import {fetchItems} from "../../redux/reducers/MainPage-reducer.js";
import {connect} from "react-redux";

const MainPageContainer = (props) => {

    useEffect(()=>{
        props.fetchItems()
    },[])

    return (
        <div>
            {props.items.map(el =>{
                return(
                    <div key={el.id}>
                        <p>{el.tittle}</p>
                        <p>{el.price}</p>
                        <img src={el.img} alt=""/>
                    </div>
                )
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.mainPage.items
})

export default connect(mapStateToProps,{
    fetchItems
})(MainPageContainer)
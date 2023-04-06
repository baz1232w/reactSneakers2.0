import React from 'react';
import {fetchItems, setPreferItem} from '../../redux/reducers/MainPage-reducer.js';
import {connect} from 'react-redux';
import {Slider} from './Slider/Slider.jsx';
import s from './Main.module.css'
import {Items} from "./Items/Items.jsx";

const MainPageContainer = (props) => {

    return (
        <div className={s.container}>
            <Slider/>
            <Items {...props}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.mainPage.items
})

export default connect(mapStateToProps,{
    fetchItems,
    setPreferItem
})(MainPageContainer)
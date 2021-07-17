import React from 'react'
import './itemListContainer.css'
// import ItemCount from '../itemCount/itemCount'
// import ItemList from '../itemList/itemList'
import {ItemDetailContainer} from '../itemDetailContainer/itemDetailContainer'


function itemListContainer(props) {

    return (
        <>
        <h2 className='itemlist'>{props.greeting}</h2>
        {/* <ItemCount stock={7} initial={1}/>
        <ItemList/> */}
        <ItemDetailContainer/>

        </>

    )

}

export default itemListContainer;
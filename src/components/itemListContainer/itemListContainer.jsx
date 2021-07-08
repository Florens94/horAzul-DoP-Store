import React from 'react'
import './itemListContainer.css'
import ItemCount from '../itemCount/itemCount'


function itemListContainer(props) {

    return (
        <>
        <h2 className='itemlist'>{props.greeting}</h2>
        <ItemCount/>
        </>

    )

}

export default itemListContainer;
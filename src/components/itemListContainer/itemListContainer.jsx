import React from 'react'
import './itemListContainer.css'


function itemListContainer(props) {

    return (
        <h2 className='itemlist'>{props.greeting}</h2>

    )

}

export default itemListContainer;
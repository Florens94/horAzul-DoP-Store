import React, { Fragment } from 'react'
import ItemCount from '../itemCount/itemCount'

const ItemDetail = ({ItemToDisplay: item}) => {
    return (
        <Fragment>
        <img src={'/' + item.img} alt={item.name} />
        <div>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <p>{item.detail}</p>
            <ItemCount initial={1} stock={item.stock}/>
            <button>AGREGAR</button>
        </div>
        </Fragment>
    )
};

export default ItemDetail;
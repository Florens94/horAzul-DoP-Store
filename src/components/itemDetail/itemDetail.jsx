import React, { Fragment, useState, Link, useContext } from 'react'
import ItemCount from '../itemCount/itemCount'
import { Context } from '../../context/context'

const ItemDetail = ({ItemToDisplay: item}) => {
    const [count, setCount] = useState(1)
    const { addCart, removeCart } = useContext(Context)
    const [finish, setFinish] = useState(false)

    const handleState = () => setFinish(finish)

    const handleSend =() => {
        addCart({...item, quantity: count})
    }

    const handleRemove = () => {
        removeCart({item})
    }
    return (
        <Fragment>
        <img src={item.img} alt={item.name} />
        <div>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <p>{item.detail}</p>
            {!finish ? (
                <>
                <ItemCount 
                initial={1}
                count={count}
                setCount={setCount}
                stock={item.stock}/>
                            <button onClick={() =>{handleState(); handleSend()}}>AGREGAR</button>
                </>
            ) : (
                <>
                <Link to='/cart' onClick={handleState}>
                <button onClick={handleState}>Terminar la compra</button>
                </Link>  
                <button onClick={handleState}>Modificar compra</button>              
                </>
            )}
        </div>
        </Fragment>
    )
};

export default ItemDetail;
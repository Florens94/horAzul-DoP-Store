import { Fragment, useState } from 'react'
import React from 'react'
import {Page} from '../page/page'

export const Cart = () => {
    const [cart, setCart] = useState([])
    const [qty, setQty] = useState(0)

    return (
        <Page>
        <Fragment>
            <h1>🛒 Cart ({qty})</h1>
            {cart.map(({title, qty})=><p>{title} {qty}</p>)}
        </Fragment>
        </Page>
    )
}


import React from 'react'
import cart from '../../../src/cart.png'
import './cartWidget.css'


export const CartWidget = () =>{
    return (
        <div>
        <img className="cart" src={cart} alt="cart"/>
        </div>
    )
}
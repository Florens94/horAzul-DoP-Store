import React, { createContext, useState } from 'react'

export const Context = createContext()

export const DataProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const notInCart = (receivedLens) => cart.filter(item => item.id === receivedLens.id).length === 0

    const addToCart = (receivedLens) => {
        if (notInCart(receivedLens)) {
            setCart([...cart, receivedLens])
        } else {
            alert("Este producto ya esta en el carrito")
        }
    }

    const removeFromCart = (receivedLens) =>{
        let allLenses = cart.filter(item => item.id != receivedLens.id)

        setCart(allLenses)
    }

    const clearCart = () => setCart([])

    return <Context.Provider value={{ cart, setCart }}>
        {children}
    </Context.Provider>
}


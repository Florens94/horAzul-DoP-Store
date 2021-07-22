import {NavBar} from '../navBar/navBar'
import {useContext, useState} from 'react'
// import {cartContext} from '../../context/cartContext'


export const Page = ({children, id}) => {


    return (
        <main>
            <NavBar/>
            <section>
                {children}
            </section>
        </main>
    )
}
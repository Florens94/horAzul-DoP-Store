import {NavBar} from '../navBar/navBar'
import {useContext, cartContext} from 'react'
// import {cartContext} from '../../context/cartContext'


export const Page = ({children, id}) => {
    const {qty} = useContext(cartContext)

    console.log('cart', qty);


    return (
        <main>
            <NavBar cartQty={qty}/>
            <section>
                {children}
            </section>
        </main>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import {NavBar} from './components/navBar/navBar'



const Routes = () =>{
    return(
        <div>
            <NavBar/>
            {/* <ItemListContainer/> */}
        </div>
    )
}

export default Routes;
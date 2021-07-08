import React from 'react'
import './navBar.css'
import {CartWidget} from '../cartWidget/cartWidget'





export const NavBar = (props) =>{
    return (
      <header>
        <nav className="nav">
          <ul className="links">
              <li className="seccion"> Nikon </li> 
              <li className="seccion"> Canon </li>
              <li className="seccion"> Sony </li>
              <CartWidget/>
          </ul>

        </nav>
      </header>
      )
}

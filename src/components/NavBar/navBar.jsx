import React from 'react'
import './navBar.css'




export const NavBar = () =>{
    return (
      <header>
        <nav className="nav">
          <ul className="links">
              <li className="seccion"> Nikon </li> 
              <li className="seccion"> Canon </li>
              <li className="seccion"> Sony </li>
          </ul>
        </nav>
      </header>)
}
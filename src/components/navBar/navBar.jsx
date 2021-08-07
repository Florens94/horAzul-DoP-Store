import React from 'react'
import './navBar.css'
import {CartWidget} from '../cartWidget/cartWidget'
import categories from '../categories.json'
import { Link } from 'react-router-dom'

export const NavBar = (props) =>{
    return (
      <header>
        <nav className="nav">
          <ul className="links">
            {categories.map((categoria)=>(
              <li className='seccion' key={categoria.url}>
                <Link to={categoria.url}>{categoria.title}</Link>
              </li>
            ))}
              <CartWidget/>
          </ul>

        </nav>
      </header>
      )
}

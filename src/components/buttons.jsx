import React from 'react'
import { Link } from 'react-router-dom'
import categories from './categories.json'

const Buttons = () => {
    return (
        <div>
            {categories.map((categories) =>
            <Link to={'/routes/' + categories.id}></Link>)}

        </div>
    )
}

export default Buttons;
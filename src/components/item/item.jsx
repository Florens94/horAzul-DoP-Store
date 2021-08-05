import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Item = ({lens}) => {
    return (
        <Link to={`/item/${lens.id}`}>
                     <h2>{lens.name}</h2>
                     <p>{lens.detail}</p>
                     <h3>{lens.price}</h3>
                     <img src={lens.img} alt={lens.name}/>
        </Link>
    )
}
// import ItemCount from '../itemCount/itemCount'
// import { useState, Link} from 'react'

// export function Item({ img, name, price, onAdd, id }) {


//     return (
//     <article>
//         		<div>
//             <img src={img} alt={img}/>
// 			<p>{name}</p>
// 			{/* <p>${price} </p> */}
// 		</div>
// 		<div>
//             <ItemCount initial={1} stock={stock} />

//             <button onClick={onAdd}>Añadir</button>
// 		</div>
// 	</article>
// )}


  
//     <div>
//         <h3>{lenses.id}</h3>
//         <h2>{lenses.name}</h2>
//         <p>{lenses.detail}</p>
//         <h3>{lenses.price}</h3>
//         <img src={lenses.img} alt={lenses.name}/>
//     </div> 

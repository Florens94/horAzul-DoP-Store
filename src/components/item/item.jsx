import React from 'react'
// import { Link } from 'react-router-dom'

export const Item = ({item}) => {
    return (
        <div>
            <p>{item.id}</p>
            <img src={item.img} alt={item.img}/>
            <strong>{item.title}</strong>
            <p> detalle: {item.detail}</p>
            </div>

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

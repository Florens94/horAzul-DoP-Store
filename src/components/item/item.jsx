import ItemCount from '../itemCount/itemCount'
import { Fragment, useState, useEffect, Link} from 'react'

export function Item({ img, title, price, onAdd }) {
    const [qty, setQty] = useState(0)
    const [finishBtn, setFinishBtn] = useState (false)


    return (
    <article>
        		<div>
			<p>{title}</p>
			<p>${price} </p>
		</div>
		<div>
            <ItemCount />
            <button onClick={onAdd}>Terminar compra</button>
		</div>
	</article>
)}
// export const Item = (props) => (

//  <div>
//      <h3>{props.id}</h3>
//      <h2>{props.title}</h2>
//      <p>{props.description}</p>
//      <h3>{props.price}</h3>

//  </div> 





        // <div>

        //     <h2>{title}</h2>
        //     <h4>${price}</h4>
        //     <ItemCount initial={1} add={onAdd} />
        //     {finish ? (
        //         <Link to="/cart" onClick={() => { setQty(0) } }
        //         >
        //                  Go to payment
        //         </Link>
        //     ) : null}
        //     <Link to="/" onClick={() => { setQty(0) } }>
        //         Go Back!
        //     </Link>
        // </div>
//     )

// }

// 	<article>





// 		<div>
// 			<p>{title}</p>
// 			<p>${price} </p>
// 		</div>
// 		<div>
//             <ItemCount/>
// 			{/* <Button
// 				content={
// 					<Fragment>
//                         Add to cart
//                     </Fragment>
// 				}
// 			/>
// 			<Button
// 				content={
// 					<Fragment>
						
// 						Favorite
// 					</Fragment>
// 				}

// 			/> */}
//             <button onClick={onAdd}>Agregar al carrito</button>
// 		</div>
// 	</article>
// )
// export const Item = (props) => (

//  <div>
//      <h3>{props.id}</h3>
//      <h2>{props.title}</h2>
//      <p>{props.description}</p>
//      <h3>{props.price}</h3>

//  </div> 

// )
/////////

// import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'

// export const Item = ({lens}) => {
//     return (
//         <Link to={`/item/${lens.id}`}>
//                      <h2>{lens.name}</h2>
//                      <p>{lens.detail}</p>
//                      <h3>{lens.price}</h3>
//                      <img src={lens.img} alt={lens.name}/>
//         </Link>
//     )
// }
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

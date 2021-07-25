import React, { useState } from 'react'
import './itemListContainer.css'
import ItemCount from '../itemCount/itemCount'
import ItemList from '../itemList/itemList'
import {ItemDetailContainer} from '../itemDetailContainer/itemDetailContainer'

const ItemListContainer = () => {
    const [displayItems, setDisplayItems] = useState([]);

    const lenses =[
        {
            id: 0,
            name: 'Canon',
            detail: 'EF-S 24mm f/2.8 STM Lens',
            price: '150 USD',
            stock: '23',
            img:'./img/canon24.jpeg'
        },
        {
            id: 1,
            name: 'Canon',
            detail: 'EF 50mm f/1.4 USM Lens',
            price: '399 USD',
            stock: '12',
            img: './img/canon50.jpeg'
        },
        {
            id: 2,
            name: 'Rokinon',
            detail: '35mm f/1.4 AS UMC Lens for Canon EF',
            price: '399 USD',
            stock:'8',
            img:'./img/rokinon35.jpeg'
            

        }

    ]

    const {catId} = useParams()

    useEffect(()=>{
        setDisplayItems([])
    })

    const getItems = () => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                if(catId) {
                    let filteredList = lenses.filter((item)=> item.category === catId)
                }
            })
        })
    }
    // const getItems = () => {
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve(lenses);
    //         }, 3000)
    //     })
    // }

    getItems().then((result)=> setDisplayItems(result))

    return <ItemList products = {lenses}/>
    
}

export default ItemListContainer;

// function itemListContainer(props) {

//     return (
//         <>
//         <h2 className='itemlist'>{props.greeting}</h2>
//         {/* <ItemCount stock={7} initial={1}/>
//         <ItemList/> */}
//         <ItemDetailContainer/>

//         </>

//     )

// }

// export default itemListContainer;
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './itemListContainer.css'
// import ItemCount from '../itemCount/itemCount'
import ItemList from '../itemList/itemList'
// import {ItemDetailContainer} from '../itemDetailContainer/itemDetailContainer'
import { database } from '../../firebase/firebase'

const ItemListContainer = () => {
    const [displayItems, setDisplayItems] = useState([]);

    const lenses  = database.collection('lentes')

    const {catId} = useParams()

    useEffect(()=>{
        setDisplayItems([])
    })

    // const getItems = () => {
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             if(catId) {
    //                 let filteredList = lenses.filter((item)=> item.category === catId)
    //             }
    //         })
    //     })
    // }
    const getItems = () => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(lenses);
            }, 3000)
        })
    }

    getItems().then((result)=> setDisplayItems(result))

    return <ItemList displayItems = {displayItems}/>
    
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
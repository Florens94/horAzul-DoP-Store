import React, { useState, useEffect}from 'react'
import ItemDetail from '../itemDetail/itemDetail'
import { useParams } from 'react-router-dom'
import { lenses } from '../lenses.json'

export const ItemDetailContainer = () => {


const [itemToDisplay, setItemToDisplay] = useState()

const {id: idParams} = useParams();

const getSelectedItem = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(lenses.find((item)=> item.id.toString() === idParams))
        }, 2000)
    })
}
useEffect(
    () => {
        setItemToDisplay()
        getSelectedItem().then((result) => setItemToDisplay(result))
    }, [idParams]);

    return (
        
        <ItemDetail itemToDisplay={itemToDisplay}/>
    );
}
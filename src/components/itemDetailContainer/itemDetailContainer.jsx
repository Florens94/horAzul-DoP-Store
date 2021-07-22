import React, { useState, useEffect}from 'react'
import ItemDetail from '../itemDetail/itemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = ()=> {
const lensesArray = [
    { 
        id: '0',
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
        stock: '8',
        img:'./img/rokinon35.jpeg'
        

    }
];

const [itemToDisplay, setItemToDisplay] = useState([])

const {id: idParams} = useParams();

const getSelectedItem = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(lensesArray.find((item)=> item.id.toString() === idParams))
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
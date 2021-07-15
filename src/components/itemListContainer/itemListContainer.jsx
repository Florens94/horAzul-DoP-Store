import React from 'react'
import './itemListContainer.css'
// import ItemCount from '../itemCount/itemCount'
import ItemList from '../itemList/itemList'


function itemListContainer(props) {
    const lensesList = props.lenses
    const getItems = () => {
        return new Promise ((resolve, reject)=> {
            setTimeout(()=>{
                resolve()
            }, 2000);
        });
    }

    getItems(lensesList)
    .then((result) => (result))
    .catch((error) => console.log(error,'no encontramos el item'))

    return (
        <>
        <h2 className='itemlist'>{props.greeting}</h2>
        {/* <ItemCount/> */}
        <ItemList/>

        </>

    )

}

export default itemListContainer;
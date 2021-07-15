import { Fragment } from 'react';
import {Item} from '../item/item'
import './itemList.css';

function ItemList () {
    const lenses =[
        {
            id: 0,
            name: 'Canon',
            detail: 'EF-S 24mm f/2.8 STM Lens',
            price: '150 USD',
            img:'./img/canon24.jpeg'
        },
        {
            id: 1,
            name: 'Canon',
            detail: 'EF 50mm f/1.4 USM Lens',
            price: '399 USD',
            img: './img/canon50.jpeg'
        },
        {
            id: 2,
            name: 'Rokinon',
            detail: '35mm f/1.4 AS UMC Lens for Canon EF',
            price: '399 USD',
            img:'./img/rokinon35.jpeg'
            

        }

    ]

    const obtenerItems = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => 
          resolve(lenses), 
          2000);
        });
      };
      
      obtenerItems().then(resultado => console.log(resultado));



    return (
        (lenses.map(lenses => (
            <Fragment>
                <div className='lenses'>

                    <h2>{lenses.name}</h2>
                    <p>{lenses.detail}</p>
                    <h3>{lenses.price}</h3>
                    <img src={lenses.img} alt={lenses.name}/>

                </div> 

            <Item item={lenses.name} key={lenses.id}/>
            </Fragment>
        )
            ))
    )

}
    // return(
    //     <Item/>
    //     )
    //     }
        
     export default ItemList;
        

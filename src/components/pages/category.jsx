import {Fragment, useState, useContext, useEffect} from 'react'
import { Page } from '../page/page'
import {useParams} from 'react-router-dom'
import items from '../lenses.json'
import {Item} from '../item/item'




export const Category = () =>  {
    const {categoryName} = useParams()
    const products = items.filter((item) => item.category === categoryName)
    const [suppWithDiscount] = useState (['Tintas'])
    const discount = (categoryName) => suppWithDiscount.some(category => category === categoryName)
    const [qty, setQty] = useState(0)
    const [finish, setFinish] = useState(false)


        useEffect(()=>{
        if (qty!== 0){
            setFinish(true)
        }
    }, [qty])

	return (

        <Page id={`category_${categoryName}`}>
			<Fragment>
				<h1>
					{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
				</h1>
				<div>
                    {products.length < 1 ?
                   <p>PROXIMAMENTE. Estamos actualizando el stock en esta categoría.</p> :
					products.map((lenses) => (
						<Item
							key={lenses.name}
							image={lenses.image}
							title={lenses.name}
							price={lenses.price}
						/>
					))}
				</div>
			</Fragment>
        </Page>

	)
}
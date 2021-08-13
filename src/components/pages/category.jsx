import {Fragment, useState, useContext, useEffect} from 'react'
import { Page } from '../page/page'
import {useParams} from 'react-router-dom'
import items from '../lenses.json'
import {Item} from '../item/item'




export const Category = () =>  {
    const {categoryName} = useParams()
    // const lenses= items.map((item) => item.category === categoryName)
    const [suppWithDiscount] = useState ([])
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

						<Item
							key={items.name}
							image={items.image}
							title={items.name}
							price={items.price}
						/>

				</div>
			</Fragment>
        </Page>

	)
}
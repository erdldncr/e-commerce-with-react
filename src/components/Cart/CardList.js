import React,{useContext} from 'react'
import CardItem from './CardItem'
import {ProductContext} from '../../Context'
export default function CardList() {
   const{cart}= useContext(ProductContext)
    return (
        <div className='container-fluid'>
            {cart.map(product=> <CardItem key={product.id} {...product}/> )}
        </div>
    )
}

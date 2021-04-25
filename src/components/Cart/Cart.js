import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import {ProductConsumer} from '../../Context'
import EmptyCard from './EmptyCard'
import CardList from './CardList'
export default class Card extends Component {
    render() {
        
        return (
            <section>
                
                <ProductConsumer>
                    {(value)=>{
                       if(value.cart.length===0){
                           return <EmptyCard/>
                       }else{
                        return <React.Fragment>
                         <Title name='Your' title='cart'/>
                        <CartColumns/>       
                        <CardList/>
                        </React.Fragment>
                        
                       }
                    
                    }}
                </ProductConsumer>
            </section>
        )
    }
}

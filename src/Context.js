import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'
const  ProductContext=React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
    state={
    products:[],
    detailProduct
    }
    setProducts=()=>{
        let products=[]
        storeProducts.forEach(product=>{
            const singleItem={...product}
            products=[...products,singleItem]
        })
        this.setState({products})
    }
    componentDidMount() {
        this.setProducts()
    }
    
    handleDetail=()=>{
        console.log('hello from detail')
    }
    addToCart=()=>{
        console.log('hello from add to cart')
    }
    render() {
 
        return (
            <ProductContext.Provider 
            value={{
                    ...this.state,
                    handleDetail:this.handleDetail,addToCart:this.addToCart
                
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer=ProductContext.Consumer;
export{ProductProvider,ProductConsumer}

import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'
const  ProductContext=React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
    state={
    products:[],
    detailProduct,
    cart:[],
    modalOpen:true,
    modalProduct:detailProduct
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
    getItem=(id)=>{
      
     return this.state.products.find(product=>product.id===id)
    }
    
    handleDetail=(id)=>{
        const product=this.getItem(id)
        
        this.setState(()=>{
            return {detailProduct:product}
        })
    }
    addToCart=(id)=>{
        let tempProducts=[...this.state.products];
        let index=tempProducts.findIndex(el=>el.id===id);
        let product=tempProducts[index];
        product.inCart=true;
        product.count=1;
        const price=product.price
        product.total=price
       this.setState({products:tempProducts,cart:[...this.state.cart,product]})
       console.log(this.state)
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

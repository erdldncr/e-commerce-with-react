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
    modalOpen:false,
    modalProduct:detailProduct,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0
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
      
    }
    openModal=id=>{
        const product=this.getItem(id)
        this.setState({modalProduct:product,modalOpen:true})
    }
    closeModal=()=>{
        this.setState({modalOpen:false})
    }
    increment=(id)=>{
        console.log('incerement')
    }
    decrement=(id)=>{
        console.log('decrement')
    }
    remove=(id)=>{
        console.log('remove')
    }
    clearCart=()=>{
        this.setState({cart:[]})
    }

    render() {
       
        return (
            <ProductContext.Provider 
            value={{
                    ...this.state,
                    handleDetail:this.handleDetail,
                    addToCart:this.addToCart,
                    openModal:this.openModal,
                    closeModal:this.closeModal,
                    removeItem:this.remove,
                    cleartCart:this.clearCart,
                    increment:this.increment,
                    decrement:this.decrement
                
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer=ProductContext.Consumer;
export{ProductProvider,ProductConsumer,ProductContext}

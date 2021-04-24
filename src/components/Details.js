import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
               { (value)=>{
                   
                const{id,title,img,price,company,info,inCart}=value.detailProduct;
                console.log(img)
                return (
                    <div className="container py-5">
                        {/* title */}
                        <div className="row">
                            ,<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* end of title */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6">
                                <img src={img} className="img-fluid" alt="product"/>
                            </div>
                            <div className="col-10 mx-auto col-md-6 text-capitalize">
                                <h1>model :{title}</h1>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by : <span className="text-uppercase">{company}</span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        price :  <span>$</span>{price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize mt-3 mb-0 font-weight-bold">
                                    some info about product:
                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>
                                {/* buttons */}
                                <div className="">
                                    <Link to='/'>
                                        <ButtonContainer>
                                        back to products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer 
                                    cart 
                                    disabled={inCart}
                                    onClick={()=>{value.addToCart(id)}}
                                    >
                                        {inCart?'inCart':'add to cart'}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }}
            </ProductConsumer>
        )
    }
}

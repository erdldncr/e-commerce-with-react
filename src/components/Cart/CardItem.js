import React,{useContext} from 'react'
import {ProductContext} from '../../Context'


export default function CardItem({id,count,img,title,price,total}) {
    const{increment,decrement,removeItem}= useContext(ProductContext)
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-19 mx-auto col-lg-2">
                <img
                src={img} 
                alt={title}
                style={{width:'5rem',height:'5rem'}}
                className='img-fluid' />
            </div>
            <div className="col-19 mx-auto col-lg-2">
             <span className="d-lg-none">product : </span>{title}
            </div>
            <div className="col-19 mx-auto col-lg-2">
            <span className="d-lg-none">price : </span>${price}
            </div>
        </div>
    )
}

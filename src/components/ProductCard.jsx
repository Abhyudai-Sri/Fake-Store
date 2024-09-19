import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {addProduct} from "../utils/cartSlice"
import { Rating } from 'react-simple-star-rating'

const ProductCard = (props) => {  
    const{data} = props;

    
    const{image, category, description, rating} = data;

    const pro = useSelector((state) => state.cart.products)
    const dispatch = useDispatch(); 

    const handleAddProduct = (product) => {
        dispatch(addProduct(product));
    }
    
  return (
    <div className='col col-lg-3 text-center'>
            <img className="w-50 h-50 pt-2 object-fit-lg-contain" src={image} alt="" />
            <h4 className="text-capitalize mt-1">{category}</h4>
            <p className="text-capitalize">{description.slice(0, 50)}</p>
            <div className="d-flex w-0">
            <h5>Rating: </h5> 
            <Rating className='ms-2' size={30} initialValue={rating?.rate} />
            </div>
            <button type="button" className="btn btn-primary my-2" onClick={()=> handleAddProduct(data)}>Add</button>
    </div>
  )
}

export default ProductCard;
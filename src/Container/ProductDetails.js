import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../Redux/actions';

function ProductDetails() {
const productID= useParams();
console.log(productID);
const dispatch = useDispatch();
const selectedProductID= useSelector(state=>state);
console.log(selectedProductID);
 const   fetchSelectedProduct = async()=>{
    const response=  await  axios.get(`https://fakestoreapi.com/products/${productID}`)
    .catch(err=>console.log(err));
    console.log(response);

 console.log(   dispatch(selectedProduct(response)));
 }
            

useEffect(()=>{

       fetchSelectedProduct()
       //console.log("done");
},[selectedProduct])

    return (
        <div>
            <h1>ProductDetails</h1>


        </div>
    )
}

export default ProductDetails

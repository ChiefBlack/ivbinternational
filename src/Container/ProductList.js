import React,{useEffect}  from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import './productlist.css'; 
import axios from 'axios';
import { setProducts } from '../Redux/actions';
function ProductList() {
    const dispatch= useDispatch();
    const products =useSelector(state=>state);
    
   // const {id, title}= products[0];

   const fetchProducts= async()=>{
    const res = await axios.get('https://fakestoreapi.com/products')
        .catch(err=>console.log("error",err));

         dispatch(setProducts(res.data));   
};

useEffect(()=>{
   fetchProducts();
   console.log(products)
},[]);

    return (
        <div className='container'> 
             <ProductComponent/>
{console.log("i have renderred")}
       
        </div>
    )
}

export default ProductList

import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../Redux/actions';
import './productdetails.css'

function ProductDetails() {
const productID= useParams();
console.log(productID);
const dispatch = useDispatch();
const selectedProductID= useSelector(state=>state.product);
console.log(selectedProductID);
 const   fetchSelectedProduct = async()=>{
    const response=  await  axios
                  .get(`https://fakestoreapi.com/products/${productID}`)
                  .catch(err=>console.log(err));
                 console.log(response);

               console.log(dispatch(selectedProduct(response)));
 }
            

useEffect(()=>{

       fetchSelectedProduct()
       //console.log("done");
},[selectedProduct])

    return (
  <div className='body'>
          <div className='Cart-Container'>
              <div className='Header'>
                   <h3 class='Heading'>Shopping Cart</h3>
                   <h5 class='Action'>Remove all</h5>
              </div>
              <div className='Cart-Items'>
                    <div className='image-box'>
                       <img src='' style={{ height:"120px" }} />
                    </div>
                  <div className='about'>
                       <h1 className='title'>Apple Juice</h1>
                       <h3 className='subtitle'>250ml</h3>
                       <img src='' style={{ height:'30px'}}/>
                   </div>
                    <div className='counter'>
                            <div className='btn'>+</div>
                            <div className='count'>2</div>
                            <div className='btn'>-</div>
                     </div>
                     <div className="prices">
                            <div className='amount'>$2.99</div>
                            <div className='save'><u>Save for later</u></div>
                            <div className='remove'><u>Remove</u></div>
                       </div>
                    
                    </div>
             
                    <hr/> 
                       <div className='checkout'>
                            <div className='total'>
                             <div>
                            <div className='subtotal'>Sub-Total</div>
                            <div className='items'>2 items</div>
                           </div>
                            <div className='total-amount'>$6.18</div>
                             </div>
                            <button className='button'>Checkout</button>
                        </div>
          

           </div>
 </div>
    )
}

export default ProductDetails

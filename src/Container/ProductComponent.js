import React from 'react'
import {  useSelector } from 'react-redux';

import './productComp.css';

function ProductComponent() {
   
    const products =useSelector(state=>state.allProducts.products);
    // console.log(products);
    // const reb= products.map(r=>r.image);
    // console.log(reb);
    const renderList= products.map(product=>{
        
        return(
                  <div className='card' key={product.id}>

                     
                     <img src={product.image} alt={product.title}
                        style={{width:"100%",height:"150px",fit: "cover"}}
                     />
                       
                     <div className='wrap'>
                         {product.title}
                          
                         
                            <p><b>R{product.price}</b></p>
                          
                                 <div className='description'>
                                  {product.category}
          
                                  </div>
                          {/* <div className='addto card'>
                            <button> add to card</button>
                            <button> add to wishList</button>
                          </div> */}
                   
                        </div>   



     
        </div> 
     );
    })
   // const {id, title}= products[0];

    
  
   
    return (
       <>{renderList}</>
    );
}

export default ProductComponent

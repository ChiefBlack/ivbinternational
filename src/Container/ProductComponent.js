import React from 'react'
import {  useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import './productComp.css';

function ProductComponent() {
   
    const products =useSelector(state=>state.allProducts.products);
    
    // console.log(products);
    // const reb= products.map(r=>r.image);
    // console.log(reb);
    const renderList= products.map(product=>{
        
        return(
                  <div className='cards' key={product.id}>
                     <Link to={`/products/:${product.id}`} > 
                               <img src={product.image} alt={product.title}
                              style={{width:"100%",height:"150px",fit: "cover"}}
                              />
                      

                          <div className='wrap'>
                              {product.title}
                         </div> 
                         
                                <p className='price'><b>R{product.price}</b></p>
                          
                                   <div className='description'>
                                          {product.category}

                                  </div>
                          <div className='cardButton'>
                               <button> <i className="fa fa-shopping-cart" style={{color:"#363062"}}></i>  add to card</button>
                               <button id='wishList'> <i className="fa fa-heart-o" style={{size:30, color: "white"}}></i> add to wishlist</button>
                          </div>
                          </Link>
          
                  </div> 
     );
    })
  

    
  
   
    return (
       <>{renderList}</>
    );
}

export default ProductComponent

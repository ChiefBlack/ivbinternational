import React, { useState, } from 'react'
import  './todo.css'
function TodoApp() {
const [addItems, SetAddItems]= useState([]);
const [inputValue, SetInputValue]= useState('');



const addHandler =()=>{
    
  
    SetAddItems([...addItems, inputValue])
    
  
    
      

}

const removeItem=(index)=>{
  const todosLeft = addItems.filter((todos, i)=>i !==index)
 return SetAddItems(todosLeft);

}





    return (
        <div className='conte'>
            <h1> BUIld to do app</h1>
              <div className='insert-add' >
                     <input type='text' onChange={(e)=>SetInputValue(e.target.value)}/>
                     <button onClick={addHandler}> 
                           ADD
                     
                     
                     </button>
                     
                </div>  
                
               <h1 > {addItems.map((todos, index)=>

           (     <li key={index}>
            {todos}   
            <button className='red' onClick={()=>removeItem(index)}>delete</button>
         
         </li>)       
                      

                     )}
               
               </h1>
               
        </div>
    )
}

export default TodoApp

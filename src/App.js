import React,{useState} from 'react';
// import './App.css';
import Layout from './layout';
import MovieApp from './MovieApp';
import Sidebar from './Sidebar';
import GridLayout from './GridLayout';
import Tabs from './tabs';
import { BrowserRouter, Route, Router,} from 'react-router-dom';
import Header from './Container/Header';
import Profile from './Container/Profile';
import Contact from './Container/Contact';
import Project from './Container/Project';
import ProductDetails from '../src/Container/ProductDetails';
import TodoApp from './Test/TodoApp';
import TodoList from './Test/TodoList';
const App =() =>{
const [count, setCount]=  useState(0);
const [movies,showMovies]=useState([]);
const [searchTerm, setSearchTem]=useState('');

const API_URL="http://www.omdbapi.com/?apikey=8a9b4493";

const searchMovie= async (title)=>{
const response= await fetch(`${API_URL}&s=${title}`);
const data = await response.json();
showMovies(data.Search);

}









// setCount=()=>"i love yo";
  return (
    
   
    
    <BrowserRouter>
     <Header/>
     {/* <TodoApp/> */}
          <Route path="/"exact component={GridLayout}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/projects" component={Project}/>
           <Route path="/products/:prductID" component={ProductDetails}/>
    </BrowserRouter>
    


  );
}

export default App;




////////
   

{/* <div className='movieApp'>
<h1> MovieLand</h1>
<div className='search '>
 <input  placeholder='search movie' value={searchTerm} onChange={(e)=>setSearchTem(e.target.value)}/>
 <i className="fa fa-search" aria-hidden="true" onClick={()=>searchMovie(searchTerm)}></i>

</div>
</div> */}
{/* <h2>{console.log(setCount())}</h2>
<h2>   hello word{count}</h2><br/>
<b>Simply explained</b><br/>

<button onClick={()=>setCount(count +1)}>click</button> */}
{/* <Sidebar/> */}
{/* <Tabs/> */}
// {
// movies.length>0 ? (
// <div className='center'>
// {movies.map((movie)=>(<MovieApp movie={movie}/>
// ))}
// </div>
//           ): (
//                 <div className='empty'>
//                <h2> No movies  Found </h2>

//                 </div>
//               )
// }

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Addproduct from './Addproduct';
import { useState } from 'react';
import Editt from './Editt';

function App() {

  const [products, setproducts] = useState([])

  function addnewproduct(title,Information,image){
    let newproduct = {
      id : new Date().getTime(),
      title : title,
      Information: Information,
      image : image
    }
    setproducts([...products, newproduct])
   
  }

  function deletproduct(id){
    setproducts(products.filter((el)=>(
    el.id !== id
    )))
        }
        
        function updateproduct(id,title,Information,image) {
          setproducts(products.map(product => product.id === id ? {...product,title:title,Information:Information,image : image} : product));
        }
      
  return (
    <Router>
      <div className="App">
     <Routes>
      <Route path = "/" element = {<Home products={products} deletproduct={deletproduct} />} ></Route>

      <Route path = "/add" element = {<Addproduct addnewproduct = {addnewproduct}/>}></Route>
        
      <Route path='/edit/:id' element={<Editt updateproduct={updateproduct} products={products}/>} ></Route>
     </Routes>
     </div>
    </Router>
  );
}

export default App;

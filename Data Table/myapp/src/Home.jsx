
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Home({ products , deletproduct }) { 
function handleDelet(id){
  deletproduct(id)
}
const [searchitem , setsearchitem] = useState('')
const filteredproduct = products.filter((el)=>(
el.title.toLowerCase().includes(searchitem.toLocaleLowerCase())
))
  return (
    <center>
      <div>
      <h1 className='hello'>Welcome To our Product Page</h1>
      <input type="text" placeholder='Search Product' value={searchitem} onChange={(e)=>setsearchitem(e.target.value)}/>
      <div className='hii'>
      {
        filteredproduct.map((el) => (
          <div key={el.id} style={{ border: '1px solid #ccc' }} className='world'> 
          
           <img src={URL.createObjectURL(el.image)} alt="product"  /><br/>
            <h3>Product Name: {el.title}</h3>
            <p>Information:{el.Information}</p>
           
            <button onClick={()=>handleDelet(el.id)} className='bu'>Delete Product</button>

            <Link to={`/edit/${el.id}`}>
              <button className='bu'>Edit Product</button>
            </Link>
          </div>
        ))
      }
      </div><br/><br/>
      <Link to="/add" style={{ display: 'block', marginTop: '20px' }}>ADD Product</Link>
    </div>
    </center>
  );
}

export default Home;

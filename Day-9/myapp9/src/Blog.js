import React from 'react'

function Blog(props) {
  return (
    <>

<center>
 <div className='main'>
      {
      props.data &&  props.data.map((el) => (
        <div className='child' key={el.id}>
        <center>
        <img src={el.image} alt="" className='img'/>
        <h2>{el.title}</h2>
        <h2>{el.price} $</h2>
        
        <button>Add to Cart</button>
        </center>
        </div>      
        ))
      }
    </div>
  
    </center>
    </>
  )
}

export default Blog
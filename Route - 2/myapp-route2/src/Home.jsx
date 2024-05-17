import React from 'react';
import { Link } from 'react-router-dom';

function Home({ posts , deletPost }) { 
function handleDelet(id){
  deletPost(id)
}
  return (
    <center>
      <div>
      <h1 style={{ maxWidth: '600px', margin: '0 auto'}}>Welcome To our Page</h1>
      {
        posts.map((el) => (
          <div key={el.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}> 
            <h2>{el.title}</h2>
            <p>{el.content}</p>
            <button onClick={()=>handleDelet(el.id)}>Delete</button>

            <Link to={`/edit/:${el.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        ))
      }
      <Link to="/add" style={{ display: 'block', marginTop: '20px' }}>ADD POST</Link>
    </div>
    </center>
  );
}

export default Home;
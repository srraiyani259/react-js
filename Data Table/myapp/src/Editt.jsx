
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


function Editt({ products, updateproduct }) {
  const { id } = useParams();
  let ans = products.find(product => product.id === parseInt(id));
  const [title, setTitle] = useState(ans.title);
  const [Information, setInformation] = useState(ans.Information);
  const [image , setimage] =useState(ans.image)
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    updateproduct(ans.id, title, Information,image);
    navigate('/');
  }
  function handlechange(e){
    setimage(e.target.files[0])
}

  return (
    <div className="container">
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <h3>Edit Product Name:</h3>
        <input value={title} onChange={(e) => setTitle(e.target.value)}  type='text'/>
        <br /><br /><br />
        <h3>Edit Product Information:</h3>
        <textarea value={Information} onChange={(e) => setInformation(e.target.value)}></textarea>
        <h3>Edit Product Image:</h3>
        <input type="file" onChange={handlechange} />
        <br /><br /><br />
        <button type='submit'>UPDATE PRODUCT</button>
        <br /><br /><br />
      </form>
      <Link to="/">Back To Product Page</Link>
    </div>
  );
}

export default Editt;

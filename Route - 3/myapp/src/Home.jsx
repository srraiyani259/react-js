
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home({ posts, deletPost }) {
  function handleDelet(id) {
    deletPost(id);
  }

  const [searchitem, setsearchitem] = useState('');
  const filteredpost = posts.filter((el) =>
    el.title.toLowerCase().includes(searchitem.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Welcome To our Page</h1>
      <input
        type="text"
        placeholder='Search post'
        value={searchitem}
        onChange={(e) => setsearchitem(e.target.value)}
      />
      {filteredpost.map((el) => (
        <div key={el.id} className="post">
          <h2>Title: {el.title}</h2>
          <p>Content: {el.content}</p>
          <img src={URL.createObjectURL(el.image)} alt="post" />
          <button className="delete" onClick={() => handleDelet(el.id)}>Delete</button>
          <Link to={`/edit/${el.id}`}>
            <button className="edit">Edit</button>
          </Link>
        </div>
      ))}
      <Link to="/add" className="add-post-link">ADD POST</Link>
    </div>
  );
}

export default Home;

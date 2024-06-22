
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Addpost({ addnewPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addnewPost(title, content, image);
    navigate('/');
  }

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  return (
    <div className="container">
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <h3>Title:</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h3>Content:</h3>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="file"
          onChange={handleImageChange}
        />
        <button type='submit'>ADD POST</button>
      </form>
      <Link to="/">Back To Home Page</Link>
    </div>
  );
}

export default Addpost;

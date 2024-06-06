
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home({ posts, delpost }) {

    function dele(id) {
        delpost(id);
    }

    const [searchItem, setSearchItem] = useState('');

    const filteredPosts = posts.filter((el)=>(

      el.title.toLowerCase().includes(searchItem.toLowerCase())

    ))

    return (
        <center>
            <div className='a1'>
                <h1 style={{ color: "red" }}>*** WELCOME TO OUR APP ***</h1>
                <input type="text" placeholder='Search the title...' value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
                <br />
                {
                filteredPosts.map((el) => (
                    <div key={el.id}>
                        <h1>{el.title}</h1>
                        <p>{el.content}</p>
                 
                        <img src={URL.createObjectURL(el.image)} alt="post" />
               
                        <button className='b1' onClick={() => dele(el.id)}>Delete</button> &nbsp;
                        <Link to={`/edit/${el.id}`}><button className='b1'>Edit Blog</button></Link>
                    </div>
                ))}
                <br /><br /><br />
                <Link to="/add">ADD POST</Link>
            </div>
        </center>
    );
}

export default Home;

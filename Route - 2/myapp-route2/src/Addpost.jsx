import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 
function Addpost({ addnewPost }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        addnewPost(title, content)
        navigate('/')
    }

    return (
        <center>
            <div className="add-post-container">
                <h2>ADD POST</h2>
                <form onSubmit={handleSubmit}>
                    <h1>Title:</h1>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} /> <br/><br/><br/>

                    <h1>Content:</h1>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea> <br/><br/><br/>

                    <button type='submit'>ADD POST</button><br/><br/><br/>
                </form>

                <Link to="/">Back TO Home Page</Link>
            </div>
        </center>
    )
}

export default Addpost;
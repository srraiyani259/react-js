import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

function Addpost({addnewPost}) {

    const[title , setTitle] = useState('')
    const[content , setContent] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        addnewPost(title , content)
        navigate ('/')
    }

  return (
    <>
        <h1>ADD POST PAGE</h1>

        <form onSubmit={handleSubmit}>
            <h1>Title : </h1>
            <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <br/> <br/> <br/>

            <h1>Content : </h1>
            <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
            <br/> <br/> <br/>

            <button type='submit'>ADD POST</button>
        </form>

        <br/> <br/> <br/>
        <Link to="/">BACK TO HOME</Link>
    </>
  )
}

export default Addpost
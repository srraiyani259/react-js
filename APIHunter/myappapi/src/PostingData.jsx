
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function PostingData() {
    const[post , setpost] = useState({
        title : '',
        body : ''
    })
    const handlechange=(event)=>{
  setpost({...post, [event.target.name]:event.target.value})
    }
const handlesubmit = (event)=>{
event.preventDefault()
axios.post('http://localhost:8000/posts',post)
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
}
  return (
    <div>
   <form action="" onSubmit={handlesubmit}>
    Title : <input type="text" name='title' onChange={handlechange} value={post.title}/>
    Post  : <input type="text" name='body' onChange={handlechange} value={post.body}/>
    <button >SUBMIT</button>
   </form>
    </div>
  )
}

export default PostingData

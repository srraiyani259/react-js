
import React, { useState } from 'react'
import {Link,useNavigate,useParams} from 'react-router-dom'

function Edit({editblog,posts}) {
  let {id}=useParams()

  let ans=posts.find(post=>post.id===parseInt(id))
  const[title,setTitle]=useState(ans.title)
  const[content,setContent]=useState(ans.content)


  
  let navigate=useNavigate()

  function handlesubmit(e)
  {
   e.preventDefault()
   editblog(ans.id,title,content)
   navigate('/')
  }

  return (
    <center>
          <div className='a1'>
        <h1 style={{color:"red"}}> *** Edit Post Page *** </h1>
        <br /> <br />

        <form action="" onSubmit={handlesubmit}>
         <label htmlFor="">TITLE :  </label> <br />
         <input type="text" value={title} onChange={(a)=>setTitle(a.target.value)}/>
         <br /> <br />
         <label htmlFor="">CONTENT : </label> <br />
         <textarea name="" id="" value={content} onChange={(a)=>setContent(a.target.value)}></textarea>
         <br /><br />
         <button type='submit'>ADD POST</button>

        </form>
        <br /><br /><br />
        <Link to="/">BACK TO HOME</Link>
    </div>
    </center>

  )
}

export default Edit

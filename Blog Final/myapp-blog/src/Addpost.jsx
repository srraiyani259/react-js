
import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

function Addpost({addnewpost}) {

  const[title,setTitle]=useState('')
  const[content,setContent]=useState('')
  const[image,setImage]=useState(null)
  
  let usenavigate=useNavigate()

  function handlesubmit(e)
  {
   e.preventDefault()
   let newpost={title,content,image}
   addnewpost(newpost)
   usenavigate('/')
  }

  function handlechange(e)
  {
    setImage(e.target.files[0])
  }

  return (
    <center>
          <div className='a1'>
        <h1 style={{color:"red"}}> *** ADD POST PAGE *** </h1>
        <br /> <br />

        <form action="" onSubmit={handlesubmit}>
         <label htmlFor="">TITLE :  </label> <br />
         <input type="text" value={title} onChange={(a)=>setTitle(a.target.value)}/>
         <br /> <br />
         <label htmlFor="">CONTENT : </label> <br />
         <textarea name="" id="" value={content} onChange={(a)=>setContent(a.target.value)}></textarea>
         <br /><br />

         <input type="file" style={{border:"none",padding:"20px" }} onChange={handlechange}/>
         <br /> <br />
         <button type='submit'>ADD POST</button>

        </form>
        <br /><br /><br />
        <Link to="/">BACK TO HOME</Link>
    </div>
    </center>
  )
}

export default Addpost

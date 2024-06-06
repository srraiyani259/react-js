

import './App.css';
import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Home';
import Addpost from './Addpost';
import { useState } from 'react';
import Edit from './Edit';

function App() {

  const[posts,setPostes]=useState([])


  function addnewpost(newpost)
  {
    //  let newpost={
    //   id: new Date().getTime(),
    //   title:title,
    //   content:content

    //  }
    newpost.id=Date.now()

     setPostes([...posts,newpost])

  }

   function delpost(id)
   {
    setPostes(posts.filter((el)=>(
       el.id!==id
    )))

   }

   function editblog(id,title,content)
   {
     
    let updatedPost=posts.map((post)=>(
      post.id===id ? {...post , title:title,content:content} : post

     ))

setPostes(updatedPost)
   }

  return (
   
    <Router>
<div className="App">

<Routes>

  
   <Route path='/' element={<Home posts={posts} delpost={delpost}/>}></Route>
   <Route path='/add' element={<Addpost addnewpost={addnewpost} />}></Route>
   <Route path='/edit/:id' element={<Edit editblog={editblog} posts={posts}/>}></Route>

  </Routes>      
     
</div>
    </Router>
  );
}

export default App;

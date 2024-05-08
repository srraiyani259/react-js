import React from 'react'
import { useState } from 'react'

function Todo() {
   const[inputvalue,setinputvalue] = useState('')
   const[todos,settodos] = useState([])

   localStorage.setItem("todo",JSON.stringify(todos))

   function add(){
    let newtodos={
        text : inputvalue
    }
    settodos([...todos,newtodos])
    setinputvalue('')
   }




  return (
    <div>
        <h1>TO-DO LIST</h1>

        <input type='text' placeholder='Enter your task' value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}/>
   
        <button onClick={add}>Add</button>
   
   {
    todos.map((el,i)=>(
        <h1 key={i}>{el.text}</h1>
    ))
   }
    </div>
    
  )

  
  
}


  
export default Todo
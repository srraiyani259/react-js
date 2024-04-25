
import React from 'react'
import { useState } from 'react'

function Controlled() {
    const [inputValue , setinputValue] = useState("")
    function handleinput(e){
       e.preventDefault()
       alert(`${inputValue}`)
    }

  return (
   <>
  <form action="" onSubmit={handleinput}>
   <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)} placeholder='Enter Your Name:'/>
   <button type='submit'>Submit</button>
  </form>
   </>
  )
}

export default Controlled

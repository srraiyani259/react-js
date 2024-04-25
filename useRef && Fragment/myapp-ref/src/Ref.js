import React from 'react'
import { useState,useEffect,useRef } from 'react'

function Ref() {
    const [inputValue , setinputValue] = useState("")

    const count = useRef(0)
    useEffect(()=>{
count.current = count.current+1
    }
)
  return (
    
    <>
    <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)} className='cen' />
    {
        <h2>Change : {count.current}</h2>   
    }
    {
      <h2>Input Value : {inputValue}</h2>
    }
    </>
  )
}

export default Ref
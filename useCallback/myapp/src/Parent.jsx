import {  useCallback , useState } from "react"
import React from 'react'
import Child from "./Child"

function Parent() {
const [count , setCount] = useState(0)
const [countwo , setcountwo] = useState(0)
const handleclick =()=>{
    setCount(count+1)
}
const handlecl=()=>{
 setCount(count-1)
}
const handleinc=useCallback(()=>{
    setcountwo(countwo+1)
    setCount(count-1)
},[countwo])
  return (
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={handleclick}>Increment</button>
        <button onClick={handlecl}>Decrement</button>
        <Child handleinc={handleinc} countwo={countwo} />
    </div>
  )
}

export default Parent
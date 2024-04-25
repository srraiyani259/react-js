
import React from 'react'
import { useState , useRef } from 'react'
function Form() {

const inputValue = useRef(null)
function handleinput(e){
    e.preventDefault()
alert(`Surname : ${inputValue.current.value}`)
}
    
  return (
    <>
    <form onSubmit={handleinput}>
        <input type="text" ref={inputValue} placeholder='Enter Your Surname:'/>
        <button type='submit'>Submit</button>

    </form>
    </>
  )
}

export default Form

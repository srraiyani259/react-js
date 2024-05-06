import React from 'react'
import Updatedcomponent from './Updatedcomponent'

function Person2({money , handleincrease}) {
  return (
    <>
    <h1>Nishant is Offring : ${money}</h1>
    <button onClick={handleincrease}>Click here to increase</button>
    </>
  )
}

export default Updatedcomponent(Person2)
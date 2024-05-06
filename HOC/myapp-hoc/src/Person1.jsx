import React from 'react'
import Updatedcomponent from './Updatedcomponent'

function Person1({money , handleincrease}) {
  return (
    <>
    <h1>Shreyas is Offring : ${money}</h1>
    <button onClick={handleincrease}>Click here to increase</button>
    </>
  )
}

export default Updatedcomponent(Person1)
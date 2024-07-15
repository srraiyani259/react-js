
import React from 'react'
import { memo } from 'react'
import { useState } from 'react'

function Child({handleinc , countwo}) {
    console.log("child component")
  return (
    <div>
    </div>
  )
}

export default memo(Child)

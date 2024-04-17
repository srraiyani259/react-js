import React from 'react'
import { useState } from 'react'

function Loggin() {
    const[islogin , setislogin] = useState(false)
    function handleout(){
setislogin(false)
    }
    function handlein(){
setislogin(true)
    }

  return (
    <div className='main'>{
      
islogin ?(
  <>
<h1>Wel Come to my Website</h1>
<button onClick={handleout} className="btnlogout">Log out</button>
</>
)

:(
  <>
<h1>Please Log in</h1>
<button onClick={handlein} className="btnbtnlogin">Log In</button>
</>

)
}
    </div>
  )
}

export default Loggin
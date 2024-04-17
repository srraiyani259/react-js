import React from 'react'
import {useState} from 'react'

function Logged() {

    const [isLoggedIn , setisLoggedIn] = useState(false)

    function handleIn(){
        setisLoggedIn(true)
    }
    function handleOut(){
        setisLoggedIn(false)
    }

  return (
    <div>

<div className="main">
     <div className="text">
             <h1> Contact Us </h1>
     </div>
         <div className="username">
             <input type="username" name="" placeholder="Name" required/><br/><br/>
             <input type="email" name="" placeholder="Email" required/><br/><br/>
             <input type="text" name="" placeholder="Company" required/><br/><br/>
             <input type="text2" name="" placeholder="Phone" required/><br/><br/>
             <input type="text3" name="" placeholder="Massage" required/><br/><br/>
             
             {
        isLoggedIn ?
        (
            <>
                <button onClick={handleOut} className='but'>Log Out</button>
                <center><h3 className='text'>Welcome To Our Website</h3></center>
            </>
        ):
        (
            <>
                <button onClick={handleIn} className='but'>Log In</button>
                <center><h3 className='text'>Please LogIn</h3></center>
            </>
        )
    }

         </div> 
</div>

    </div>
  )
}

export default Logged
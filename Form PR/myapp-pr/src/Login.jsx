
import React from 'react'
import './App.css';
import { useState } from 'react'

function Login(props) {
    const [isLoggedIn , setisLoggedIn] = useState(false)

   
    function handleOut(){
        setisLoggedIn(false)
    }
    const [formdata , setformdata] = useState({
        username : '',
        email : '',
        password : ''
    })  

    const [errors , setErrors]=useState({})
    
    function handleinput(e){
        const {name , value} = e.target
        setformdata({
            ...formdata,
            [name] : value
        }) 
    }

    function handlesubmit(e){
e.preventDefault()
console.log(formdata)

let errors = validate(formdata)
setErrors(errors)
if(Object.keys(errors).length === 0){
// alert("Submitted")
setisLoggedIn(true)
}
else{
    setErrors(errors)
}
}
    function validate(values){
  let errors = {}
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if(!values.username){
    errors.username = "Username is required"
  }
  if(!regex.test(values.email)){
    errors.email = "Email is not valid"
  }
  if(!values.password){
    errors.password = "Password is required"

  }
  else if(values.password.length<8){
    errors.password = "Password must be more than 8 characters"
  }
  return errors
  }
    

  return (
    <div>

<div className="main">
             {
        isLoggedIn ?
        (
            <>
            <button onClick={handleOut} className='but'>Log Out</button>
               
                
             {
    
    <div className='heading'   >
        {
            props.posts.map((p)=>(
                <div className='mp'>
                    <img src={p.image} alt="" />
                    <h1> {p.title}</h1>
                    <h2> {p.price}</h2>
                   <h3>{p.description}</h3>
                   <h4>{p.category}</h4>
                </div>
            ))
        }
    </div>
    
    
    }
            
                
            </>
        ):
        (
            <>
            <form onSubmit={handlesubmit}>
        <label>Enter your username : </label>
        <input type="text" name='username' value={formdata.username} onChange={handleinput}/>
        <p>{errors.username}</p>
        <br/>
        <label htmlFor="">Enter your Email : </label>
        <input type="text" name='email' value={formdata.email} onChange={handleinput} />
        <p>{errors.email}</p>
        <br/>
        <label htmlFor="">Enter your Password : </label>
        <input type="text" name='password' value={formdata.password} onChange={handleinput}/>
        <p>{errors.password}</p>
        <br/>
        <button type='Submit'>Submit</button>
    </form>
        
    
            </>
        )
    }

         
</div>

    </div>
  )
}


export default Login
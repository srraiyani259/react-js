import React,{useState , useEffect} from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth , provider } from './Config';
import Home from './Home';
import { signOut } from 'firebase/auth'

function Signin() {

    const [value , setValue] = useState("")

    const handleClick=()=>{
        signInWithPopup(auth , provider)
        .then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const handleSignout=()=>{
        signOut(auth)
        .then(()=>{
            localStorage.removeItem("email",)
            setValue('')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        
        let userEmail = localStorage.getItem("email")
        if(userEmail){
            setValue(userEmail)
        }

    },[])

    return (
        <div>
          {value ? 
          
          <>
          <h1>Welcome !{value.displayName}</h1>
          <Home/>
          <button onClick={handleSignout}>Sign Out</button>
          <img src={value.photoURL}/>
          </>
          : <button onClick={handleClick}>SingIN With Google</button>}
        </div>
      )

}

export default Signin
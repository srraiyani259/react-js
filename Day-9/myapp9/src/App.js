import React from 'react'
import  './App.css'
import { useState ,useEffect } from 'react';
import Blog from './Blog';

function App() {
  const[data,setData]=useState(null)

  
      useEffect(()=>{

        const fetchData = async () =>{

          let response = await fetch('https://fakestoreapi.com/products')
          let jsondata= await response.json()
   
          setData(jsondata)
          console.log(data)
        }
        fetchData()
      },[])


  return (
   
    <Blog data={data}/>
  )
}

export default App
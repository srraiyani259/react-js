
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './FetchingData.css'


function FetchingData() {

    const[data,setData]=useState([])
    const[loading,SetLoading]=useState(true)

    useEffect(()=>{
           
        const fetchdata=async()=>{
         
            try{
               let res = await axios.get('https://fakestoreapi.com/products')
               setData(res.data)
               SetLoading(false)

               console.log(res.data)
            }
            catch(err)
            {
              console.log("Error")
              SetLoading(false)
            }
        }

        fetchdata()
    },[])
  return (
    <div className='main'>

    {
    loading ?
    (
        <div className="loader">Loading...   </div> 
    ) 
    : 
    (
        data.map((el) => (
            <div key={el.id} className="product">
                <img src={el.image} alt="" />
                <h2>{el.title}</h2>
                <h1>{`Rs.${el.price}`}</h1>
                <p>{el.description}</p>
            </div>
        ))
    )
    
    }
    
</div>
  )
}

export default FetchingData

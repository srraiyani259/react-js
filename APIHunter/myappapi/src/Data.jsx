
import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Data = () => {
    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true)
 useEffect(()=>{

     const fatchingdata = async()=>{
        try{
            let response = await axios.get('http://localhost:8000/posts')
            setdata(response.data)
            setLoading(false)
        }
        catch(err){
            console.log("Eroor")
            setLoading(false)
        }
       
     }
fatchingdata()

 })
   
    return (
        <>
        <div className='main'>
            {loading ? (
          <div class="loader-container">
          <div class="loader"></div>
          <div>Loading...</div>
      </div>
            ) : (
                data && data.map((el) => (
                    <div className='mp' key={el.id}>
                     
                        <h1>{el.title}</h1>
                        <h2>{el.body}</h2>
                    </div>
                ))
            )}
        </div>
    </>

    );
};

export default Data;

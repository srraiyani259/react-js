
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 

function Addproduct({ addnewproduct }) {
    const [title, setTitle] = useState('')
    const [Information, setInformation] = useState('')
    const [image , setimage] =useState(null)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        addnewproduct(title, Information,image)
        navigate('/')
    }
function handlechange(e){
    setimage(e.target.files[0])
}
    return (
        <center>
            <div className="container">
                <h1>ADD ABOUT PRODUCT</h1>
                <form onSubmit={handleSubmit}>
                    <h3>Product Name:</h3>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type='text'/> <br/><br/><br/>

                    <h3>Product Information:</h3>
                    <textarea value={Information} onChange={(e) => setInformation(e.target.value)} type='text' ></textarea> <br/><br/><br/>
                    <h3>Select Product Image:</h3><input type="file" onChange={handlechange} />
                    
                    <button type='submit'>ADD Product</button><br/><br/><br/>
                </form>

                <Link to="/">Back TO Product Page</Link>
            </div>
        </center>
    )
}

export default Addproduct;

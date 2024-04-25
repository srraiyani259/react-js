
import React from 'react'
import { useState } from 'react'
function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
       
      };
    

  return (
    <form onSubmit={handleSubmit}>
    <label>First Name:</label><br/><br/><br/>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/><br/><br/><br/>
    
    <label>Last Name:</label><br/><br/><br/>
      <input type="text" name="lastName" value={formData.lastName}onChange={handleChange}/><br/><br/><br/>
    
    <label>Email:</label><br/><br/><br/>
      <input type="email" name="email" value={formData.email} onChange={handleChange}/><br/><br/><br/>
    
    <label>Phone:</label><br/><br/><br/>
      <input type="text" name="phone" value={formData.phone} onChange={handleChange}/><br/><br/><br/>
    
    <button type="submit">Submit</button>
  </form>
  )
}

export default Form

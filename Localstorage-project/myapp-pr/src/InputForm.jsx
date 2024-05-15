import React, { useState, useEffect } from 'react';
import './App.css';

function InputForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [dataList, setDataList] = useState([]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = {
      ...formData,
      id: Math.random().toString(36).substring(2, 15),
    };

    setDataList([...dataList, newData]);
    setFormData({ name: '', email: '', message: '' }); 

    localStorage.setItem('userData', JSON.stringify(dataList));
  };

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setDataList(JSON.parse(storedData));
    }
  }, []);
  return (
    <div className="container">
      <h1>Input Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data</h2>
      {dataList.length > 0 ? (
        <ul className="data-list">
          {dataList.map((item) => (
            <li key={item.id}>
              <strong>Name:</strong> {item.name} <br />
              <strong>Email:</strong> {item.email} <br />
              <strong>Message:</strong> {item.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
}

export default InputForm;

import React, { useState } from 'react';
import './RideRequest.css';

const RideRequest = ({ onRequest }) => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRequest({ pickup, dropoff });
  };

  return (
    <form className="ride-request" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Pickup location" 
        value={pickup} 
        onChange={(e) => setPickup(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Dropoff location" 
        value={dropoff} 
        onChange={(e) => setDropoff(e.target.value)} 
      />
      <button type="submit">Request Ride</button>
    </form>
  );
};

export default RideRequest;

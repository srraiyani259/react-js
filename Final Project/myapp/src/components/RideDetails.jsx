import React from 'react';
import './RideDetails.css';

const RideDetails = ({ ride }) => {
  return (
    <div className="ride-details">
      <h2>Ride Details</h2>
      <p>Pickup: {ride.pickup}</p>
      <p>Dropoff: {ride.dropoff}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default RideDetails;

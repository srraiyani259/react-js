import React, { useState } from 'react';
import './Ride.css';
import SearchSection from './SearchSection';
import GoogleMapSection from './GoogleMapSection';

function Ride() {
  const [locations, setLocations] = useState({
    pickUp: { lat: '22.3039', lng: '70.8022' },  
    dropOff: { lat: '15.2993', lng: '74.1240' }   
  });
  return (
    <div className="ride">
      <div className="sub-ride-search">
        <SearchSection/>
      </div>
      <div className="sub-ride-map">
      <GoogleMapSection locations={locations} />
      </div>
    </div>
  );
}

export default Ride;

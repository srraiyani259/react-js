import React, { useState } from 'react';
import RideRequest from '../components/RideRequest';
import Map from '../components/Map';
import RideDetails from '../components/RideDetails';
import './Home.css';

const Home = () => {
  const [ride, setRide] = useState(null);

  const handleRequest = (rideDetails) => {
    setRide(rideDetails);
  };

  return (
    <div className="home">
      <RideRequest onRequest={handleRequest} />
      <Map pickup={ride?.pickup} dropoff={ride?.dropoff} />
      {ride && <RideDetails ride={ride} />}
    </div>
  );
};

export default Home;

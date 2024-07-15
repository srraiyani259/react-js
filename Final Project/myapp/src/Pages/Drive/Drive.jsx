import React, { useContext } from 'react';
import { Empty, Button } from 'antd';
import { RideContext } from '../Ride/RideContaxt';
import './Drive.css';

const Drive = () => {
  const { pickUpLocation, dropOffLocation, selectedRide, acceptRide, rejectRide } = useContext(RideContext);

  if (!pickUpLocation || !dropOffLocation || !selectedRide) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '630px' }}>
        <Empty />
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center' }} className='driveSection'>
      <h1>Ride Details</h1>
      <div>
        <p><strong>Pick Up Location:</strong> {pickUpLocation}</p>
        <p><strong>Drop Off Location:</strong> {dropOffLocation}</p>
        <p><strong>Selected Ride:</strong> {selectedRide}</p>
      </div>
      <div>
        <Button type="primary" onClick={acceptRide} style={{ marginRight: '10px' }}>
          Accept
        </Button>
        <Button type="danger" onClick={rejectRide}>
          Reject
        </Button>
      </div>
    </div>
  );
};

export default Drive;
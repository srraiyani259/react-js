import React, { createContext, useState } from 'react';
import { message } from 'antd';

export const RideContext = createContext();

export const RideProvider = ({ children }) => {
  const [pickUpLocation, setPickUpLocation] = useState(localStorage.getItem('pickUpLocation'));
  const [dropOffLocation, setDropOffLocation] = useState(localStorage.getItem('dropOffLocation'));
  const [selectedRide, setSelectedRide] = useState(localStorage.getItem('selectedRide'));

  const acceptRide = () => {
    message.success('Ride accepted successfully!');
  };

  const rejectRide = () => {
    localStorage.removeItem('pickUpLocation');
    localStorage.removeItem('dropOffLocation');
    localStorage.removeItem('selectedRide');
    setPickUpLocation(null);
    setDropOffLocation(null);
    setSelectedRide(null);
    message.success('Ride rejected successfully!');
  };

  return (
    <RideContext.Provider value={{ pickUpLocation, dropOffLocation, selectedRide, setPickUpLocation, setDropOffLocation, setSelectedRide, acceptRide, rejectRide }}>
      {children}
    </RideContext.Provider>
  );
};
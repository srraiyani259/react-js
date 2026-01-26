import React, { useRef, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Map.css';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const Map = ({ pickup, dropoff }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (pickup && dropoff) {
      // Logic for showing pickup and dropoff markers on the map
    }
  }, [pickup, dropoff]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: -3.745, lng: -38.523 }}
        zoom={10}
        onLoad={map => mapRef.current = map}
      >
        {/* Additional map features like markers can go here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import Polyline from './Polyline';

const mapStyles = [
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff' }]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#000000' }]
  }
];

function GoogleMapSection({ locations }) {
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);

  useEffect(() => {
    if (locations && locations.pickUp && locations.dropOff) {
      const pickUpMarker = {
        id: 1,
        lat: locations.pickUp.lat,
        lng: locations.pickUp.lng
      };

      const dropOffMarker = {
        id: 2,
        lat: locations.dropOff.lat,
        lng: locations.dropOff.lng
      };

      setMarkers([pickUpMarker, dropOffMarker]);
    }
  }, [locations]);

  const defaultCenter = {
    lat: 22.3039,
    lng: 70.8022 
  };

  return (
    <div style={{ height: '100vh', width: '100%' , marginTop : "25px"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAKSAuCadOazZkzOEJ-dVYjo55b56PVQKU' }}
        defaultCenter={defaultCenter}
        defaultZoom={14}
        options={{
          styles: mapStyles
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          setMap(map);
          setMaps(maps);
        }}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            lat={marker.lat}
            lng={marker.lng}
          />
        ))}

        {markers.length === 2 && (
          <Polyline
            map={map}
            maps={maps}
            path={[{ lat: markers[0].lat, lng: markers[0].lng }, { lat: markers[1].lat, lng: markers[1].lng }]}
            options={{ strokeColor: '#FF0000', strokeOpacity: 1.0, strokeWeight: 2 }}
          />
        )}
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMapSection;

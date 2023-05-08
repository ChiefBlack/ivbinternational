import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer(props) {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  const center = { lat: -25.7479, lng: 28.2293 };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={center}
    >
      <Marker position={center} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: '636167926295-l05bbenut26e9fsv1ob72hddrk86rcpo.apps.googleusercontent.com',
})(MapContainer);
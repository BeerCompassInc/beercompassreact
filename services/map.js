import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
module.exports = ({state, dispatch}) => {
  const { location, markers } = state
  const mapContainer = <div style={{height: '100%', width: '100%'}} />

  const pins = markers.map((marker, i) => {
    const icon = {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Emoji_u1f37a.svg/2000px-Emoji_u1f37a.svg.png',
      scaledSize: new google.maps.Size(30, 30)
    }
    const markerOnMap = {
      position: {
        lat: marker.lat,
        lng: marker.lng
      },
      animation: google.maps.Animation.DROP,
      icon
    }
    return <Marker
      onClick={() => dispatch({type: 'TOGGLE_MARKER_DISPLAY', payload: marker})}
      key={i} {...markerOnMap} >
      {marker.showInfo && (
        <InfoWindow className='marker'>
          <p>{marker.placeId}</p>
        </InfoWindow>
      )}
    </Marker>
  })
  return (
    <GoogleMapLoader
      containerElement={mapContainer}
      googleMapElement={
        <GoogleMap
          defaultZoom={15}
          defaultCenter={location}
          options={{streetViewControl: false, mapTypeControl: false }}>
          { pins }
        </GoogleMap>
    } />
  )
}

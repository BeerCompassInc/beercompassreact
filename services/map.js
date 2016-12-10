import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
const Map = ({state, dispatch}) => {
  const { location, markers } = state
  const mapContainer = <div style={{height: '100%', width: '100%'}} />

  const pins = markers.map((venue, i) => {
    const icon = {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Emoji_u1f37a.svg/2000px-Emoji_u1f37a.svg.png',
      scaledSize: new google.maps.Size(30, 30)
    }
    const marker = {
      position: {
        lat: venue.lat,
        lng: venue.lng
      },
      animation: google.maps.Animation.DROP,
      icon
    }
    return <Marker
      onClick={() => dispatch({type: 'TOGGLE_MARKER_DISPLAY', payload: i})}
      key={i} {...marker} >
      {marker.showInfo && (
        <InfoWindow className='marker'  >
          <h1>Hello World</h1>
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
          options={{streetViewControl: true, mapTypeControl: true }}>
          { pins }
        </GoogleMap>
    } />
  )
}
export default Map

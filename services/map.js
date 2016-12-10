import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'


const Map = ({state}) => {
  const { location, markers } = state
  const mapContainer = <div style={{height:'100%', width:'100%'}}></div>

  const pins = markers.map((venue, i) => {
    const marker = {
      position: {
        lat: venue.lat,
        lng: venue.lng
      }
    }
    return <Marker key={i} {...marker} />
  })
return (
  <GoogleMapLoader
    containerElement = { mapContainer }
    googleMapElement = {
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

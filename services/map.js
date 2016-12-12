import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

module.exports = ({ state, dispatch }) => {
  const { location, markers } = state
  return (
    <GoogleMapLoader
      containerElement={<div style={{height: '100%', width: '100%'}} />}
      googleMapElement={
        <GoogleMap
          defaultZoom={15}
          defaultCenter={location}
          options={{ streetViewControl: false, mapTypeControl: false }}>
          { makeMarkers(markers, dispatch) }
        </GoogleMap>
    } />
  )
}

function makeMarkers (markers, dispatch) {
  const Markers = markers.map((marker, i) => {
    const markerOnMap = buildMarker(marker)
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
  return Markers
}

function buildMarker (marker) {
  const icon = buildIcon(marker)
  return {
    position: {
      lat: marker.lat,
      lng: marker.lng
    },
    animation: marker.renderedYet ? null : google.maps.Animation.DROP,
    icon
  }
}

function buildIcon (marker) {
  const size = marker.time.map((time) => {
    return 3 / time
  })
  let beerSize = size.reduce((a, b) => {
    return a + b
  })
  beerSize += 10
  const icon = {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Emoji_u1f37a.svg/2000px-Emoji_u1f37a.svg.png',
    scaledSize: new google.maps.Size(beerSize, beerSize)
  }
  return icon
}

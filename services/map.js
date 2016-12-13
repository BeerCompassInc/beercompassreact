import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import coolOrangeNightMap from '../coolOrangeNightMap.json'

// var coolOrangeNightMap = require('../coolOrangeNightMap.json')

module.exports = ({ state, dispatch }) => {
  const { route, location, adventureToRender, myadventures } = state
  const markers = route === '/mymap' ? state.markers : myadventures[adventureToRender]

  return (
    <GoogleMapLoader
      containerElement={<div style={{height: '100%', width: '100%'}} />}
      googleMapElement={
        <GoogleMap
          defaultZoom={19}
          defaultCenter={location}
          defaultOptions={{
            styles: coolOrangeNightMap,
            streetViewControl: false,
            mapTypeControl: false,
            minZoom: 12
          }}
        >
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
    icon
  }
}

function buildIcon ({beerSize}) {
  return {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Emoji_u1f37a.svg/2000px-Emoji_u1f37a.svg.png',
    scaledSize: new google.maps.Size(beerSize, beerSize)
  }
}

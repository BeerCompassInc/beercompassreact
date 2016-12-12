import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

module.exports = ({state, dispatch}) => {
  const { location, markers } = state
  const mapContainer = <div style={{height: '100%', width: '100%'}} />

  const pins = markers.map((marker, i) => {
    const markerOnMap = buildMarker(marker, )

    return <Marker
      onClick={() => {
        dispatch({type: 'TOGGLE_MARKER_DISPLAY', payload: marker})
      }
    }
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
          options={{ streetViewControl: false, mapTypeControl: false }}>
          <Pins markers={someMarkers} />
        </GoogleMap>
      }
    />
  )
}

function buildMarker(.... ) {

}

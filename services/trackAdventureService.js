// import React, { Component } from 'react'
// import request from 'superagent'
//
// module.exports = () => {
//     var wellington = new google.maps.LatLng(-41.296798, 174.773789);
//         var mapOptions = {
//             zoom: 16,
//             center: wellington
//         };
//
//     this.map = new google.maps.Map(this.refs.map , mapOptions)
//     console.log('This map ', this.refs.map);
//
//     let _this = this
//
//
//     var infowindow = new google.maps.InfoWindow()
//     var service = new google.maps.places.PlacesService(this.map);
//     service.textSearch({
//       location: wellington,
//       radius: 500,
//       query: 'atm'
//     }, callback);
//
//     function callback(results, status) {
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//         for (var i = 0; i < results.length; i++) {
//           createMarker(results[i]);
//         }
//       }
//     }
//
//     const icon = {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Emoji_u1f37a.svg/2000px-Emoji_u1f37a.svg.png',
//     scaledSize: new google.maps.Size(30, 30)}
//
//     function createMarker(place) {
//       var placeLoc = place.geometry.location;
//       var marker = new google.maps.Marker({
//         map: _this.map,
//         position: place.geometry.location,
//         icon: icon
//       });
//
//     google.maps.event.addListener(marker, 'click', function() {
//       infowindow.setContent(place.name);
//       infowindow.open(_this.map, this)
//     })
//   }
//   return(
//     <div id='map' ref='map' style={{width: '100vw', height: '89vh'}}></div>
//   )
// }

import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

module.exports = ({ state, dispatch }) => {
  const { location } = state
  var service = new google.maps.places.PlacesService()
  service.textSearch({
    location,
    radius: 500,
    query: 'atm'
  }, );
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
        <InfoWindow className='marker'>
          <p>{marker.name}</p>
        </InfoWindow>
      )}
    </Marker>
  })
  return Markers
}

function buildMarker (marker) {
  console.log(marker);
  const icon = buildIcon(marker)
  return {
    // position: marker.geometry.location,
    icon
  }
}

function buildIcon () {
  return {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Emoji_u1f37a.svg/2000px-Emoji_u1f37a.svg.png',
    scaledSize: new google.maps.Size(30, 30)
  }
}

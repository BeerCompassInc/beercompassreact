import request from 'superagent'

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

module.exports = ({getState, dispatch}) => {
  navigator.geolocation.watchPosition((position, options) => {
    const { latitude, longitude } = position.coords
    request
      .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI`)
      .end((err, res) => {
        if (!err) {
          const response = res.body.results[0]
          const placeId = response.place_id
          const address = response.formatted_address
          const newMarker = buildMarker(latitude, longitude, placeId, address)
          if (!hasBeenVisited(getState, placeId)) {
            newMarker.time = [1]
            newMarker.beerSize = 15
            dispatch({type: 'ADD_NEW_MARKER', payload: newMarker})
          }
          else dispatch({type: 'ADD_TIME_TO_MARKER', payload: newMarker})
        }
      })
  })
}

function buildMarker (lat, lng, placeId, address) {
  return {
    lat,
    lng,
    showInfo: false,
    placeId,
    address
  }
}

function hasBeenVisited (getState, placeId) {
  return getState().markers.find((marker) => {
    return marker.placeId === placeId
  })
}

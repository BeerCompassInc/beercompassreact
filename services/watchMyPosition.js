import request from 'superagent'

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

module.exports = ({getState, dispatch}) => {
  navigator.geolocation.watchPosition((position, options) => {
    var newMarker = buildMarker(position) 
    const { placeId, lat, lng time } = newMarker

    request
      .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_KEY}`)
      .end((err, res) => {
        if (!err) {
          var placeId = res.body.results[0].place_id

          if (!hasBeenAtThisPlace(getState) {
            newMarker.time = [1] // should this be done by the reducer?
            dispatch({type: 'ADD_NEW_MARKER', payload: newMarker})
          } else {
            dispatch({type: 'ADD_TIME_TO_MARKER', payload: newMarker})
          }
        }
      })
  })
}

function buildMarker(position) {
  return {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
    showInfo: false,
    renderedYet: false
  }
}

function hasBeenAtThisPlace(getState) {
  return getState().markers.find((place) => {
    return place.placeId === placeId
  })
}

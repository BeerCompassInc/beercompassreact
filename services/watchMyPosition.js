import request from 'superagent'

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

module.exports = ({getState, dispatch}) => {
  navigator.geolocation.watchPosition((position, options) => {
    var newMarker = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      showInfo: false,
      renderedYet: false
    }

    request
      .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${newMarker.lat},${newMarker.lng}&key=AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI`)
      .end((err, res) => {
        var placeId = res.body.results[0].place_id
        newMarker.placeId = placeId
        var check = getState().markers.map((place) => {
          return place.placeId == placeId
        })
        if (check.length == 0) {
          newMarker.time = [1]
          dispatch({type: 'ADD_NEW_MARKER' , payload: newMarker})
        }
        else {
          dispatch({type: 'ADD_TIME_TO_MARKER', payload: newMarker})
        }
      })
  })
}

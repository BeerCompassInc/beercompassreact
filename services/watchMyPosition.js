import request from 'superagent'

module.exports = ({getState, dispatch}) => {
  navigator.geolocation.watchPosition((position) => {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      showInfo: false
    }

    request
      .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&key=AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI`)
      .end((err, res) => {
        var placeId = res.body.results[0].place_id
        pos.placeId = placeId
        var check = getState().markers.find((place) => {
          return place.placeId == placeId
        })
        if (!check) {
          dispatch({type:'UPDATE_CURRENT_POS' , payload: pos})
        }
      })
  })
}

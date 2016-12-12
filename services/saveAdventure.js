import request from 'superagent'
import getAdventures from './getAdventures'
// beercompass-server.herokuapp.com
const newAdventure = ({ currentUser }, dispatch) => {
  request
    .post('http://192.168.1.22:3000/api/v1/adventures/new')
    .withCredentials()
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (!err) {
        dispatch({type: 'SAVE_CURRENT_ADVENTURE_ID', payload: res.body.adventure_id})
      }
    })
}

const storeAdventure = ({ markers, currentAdventure, currentUser }, dispatch) => {
  var positions = markers.map((marker) => {
    return {
      user_id: currentUser.user_id,
      adventure_id: currentAdventure,
      lat: marker.lat,
      lng: marker.lng
    }
  })
  request
    .post('http://192.168.1.22:3000/api/v1/adventures')
    .send({positions})
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        dispatch({type: 'STOP_ADVENTURE'})
        getAdventures(dispatch)
      }
    })
}

module.exports = {
  newAdventure,
  storeAdventure
}

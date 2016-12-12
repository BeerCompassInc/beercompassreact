import request from 'superagent'

const newAdventure = ({ currentUser }, dispatch) => {
  request
    .post('https://beercompass-server.herokuapp.com/api/v1/newAdventure')
    .send({user: currentUser})
    .withCredentials()
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (!err) {
        dispatch({type: 'SAVE_CURRENT_ADVENTURE_ID', payload: res.body.adventure_id})
      }
    })
}

const storeAdventure = (dispatch) => {
  request
    .post('https://beercompass-server.herokuapp.com/api/v1/saveAdventure')
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        dispatch({type: 'STOP_ADVENTURE'})
      }
    })
}

module.exports = {
  newAdventure,
  storeAdventure
}

import request from 'superagent'

const newAdventure = (dispatch) => {
  request
    .get()
    .end((err, res) => {
      dispatch({type: 'SAVE_CURRENT_ADVENTURE_ID', payload: res.body})
    })
}

const storeAdventure = (dispatch) => {
  request
    .post()
    .end((err, res) => {
      dispatch({type: 'STOP_ADVENTURE'})
    })
}

module.exports = {
  newAdventure,
  storeAdventure
}

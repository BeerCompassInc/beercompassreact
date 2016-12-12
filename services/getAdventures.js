import request from 'superagent'

module.exports = (dispatch) => {
  const url = 'http://localhost:3000/api/v1/adventures/1'
  request
    .get(url)
    .set('Accept', 'text/json')
    .end((err, res) => {
      dispatch({type: 'ADD_ADVENTURE', payload: res.body})
    })
}

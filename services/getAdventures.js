import request from 'superagent'

module.exports = (dispatch) => {
  dispatch({type: 'CHANGE_ROUTE', payload: '/loading'})
  request
    .get('http://192.168.1.22:3000/api/v1/adventures/')
    .withCredentials()
    .end((err, res) => {
      console.log(res, err);
      if (!err) dispatch({type: 'GET_ADVENTURES', payload: res.body})
    })
}

import request from 'superagent'
import getAdventures from './getAdventures'

module.exports = ({ loginDetails }, dispatch) => {
  const { username, password } = loginDetails
  request
    .post('https://beercompass-server.herokuapp.com/api/v1/login')
    .send({ username, password })
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        getAdventures(dispatch)
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.body.user })
      }
      else dispatch({ type: 'CHANGE_ROUTE', payload: '/' })
    })
}

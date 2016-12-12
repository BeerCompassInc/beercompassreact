import request from 'superagent'

module.exports = ({ loginDetails }, dispatch) => {
  const { username, password } = loginDetails
  request
    .post('https://beercompass-server.herokuapp.com/api/v1/login')
    .send({ username, password })
    .withCredentials()
    .end((err, res) => {
      console.log(res)
      if (!err) {
        if (res.body) dispatch({ type: 'LOGIN_SUCCESS', payload: res.body })
        else dispatch({ type: 'CHANGE_ROUTE', payload: '/' })
      }
    })
}

import request from 'superagent'

module.exports = ({newUserDetails}, dispatch) => {
  const { username, password, email } = newUserDetails
  request
    .post('https://beercompass-server.herokuapp.com/api/v1/signup')
    .send({username, password, email})
    .end((err, res) => {
      if (res) {
        if (!err) {
          dispatch({type: 'SIGNUP_SUCCESS'})
        }
      }
    })
}

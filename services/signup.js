import request from 'superagent'

module.exports = ({newUserDetails}, dispatch) => {
  const { username, password, email } = newUserDetails
  request
    .post('http://192.168.1.22:3000/api/v1/signup')
    .send({username, password, email})
    .end((err, res) => {
      if (res) {
        if (!err) {
          dispatch({type: 'SIGNUP_SUCCESS'})
        }
      }
    })
}

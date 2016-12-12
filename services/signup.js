import request from 'superagent'

module.exports = ({newUserDetails}, dispatch) => {
  const {username, password, email} = newUserDetails
  request
    .post('http://localhost:3000/api/v1/signup')
    .send({username, password, email})
    .end((err,res) => {
      if (res) {
        dispatch({type: 'SIGNUP_SUCCESS'})
      }
    })
}

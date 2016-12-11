import request from 'superagent'

module.exports = ({newUserDetails}, dispatch) => {
  const {username, password, email} = newUserDetails
  request
    .post('https://beercompass-server.herokuapp.com/signup')
    .send({username, password, email})
    .end((err,res) => {
      if (res) {
        dispatch({type: 'SIGNUP_SUCCESS'})
      }
    })
}

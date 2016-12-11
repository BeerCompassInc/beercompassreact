import request from 'superagent'

module.exports = ({newUserDetails}, dispatch) => {
  const {username, password, email} = newUserDetails
  request
    .post('http://localhost:3000/signup')
    .send({username, password, email})
    .end((err,res) => {
      console.log(res);
      if (res.body){
        dispatch({type: 'LOGIN_SUCCESS', payload: res.body })
      }
    })
}

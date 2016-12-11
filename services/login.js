import request from 'superagent'

module.exports = ({loginDetails}, dispatch) => {
  const {username, password} = loginDetails
  request
    .post('http://localhost:3000/login')
    .send({username, password})
    .withCredentials()
    .end((err,res) => {
      console.log(res);
      if (res.body){
        dispatch({type: 'LOGIN_SUCCESS', payload: res.body })
      }
    })
}

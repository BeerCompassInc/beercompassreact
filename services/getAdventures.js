import request from 'superagent'

module.exports = (dispatch) => {
  const url = 'https://beercompass-server.herokuapp.com/api/v1/adventures/1'
  request
    .get(url)
    .set('Accept', 'text/json')
    .end((err, res) => {
      console.log(res.body);
      dispatch({type: 'ADD_ADVENTURE', payload: res.body})
    })
}

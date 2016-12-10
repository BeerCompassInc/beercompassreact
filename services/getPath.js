import request from 'superagent'


url = ''

request
  .get(url)
  .end(function(err, res) {
    console.log(res.JSON)
  })

  module.exports = getPath

  
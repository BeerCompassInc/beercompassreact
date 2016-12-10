import React from 'react'
import request from 'superagent'


const getAdventure = () => {

  const url = 'http://localhost:3000/api/v1/1/1/'
  request
  .get(url)
  .set('Accept', 'text/json')
  .end((err, res) => {
    console.log(JSON.stringify(res.body))
  })

  return (
    <div>
      <p>This is in the getAdventure service</p>
    </div>
  )


}

export default getAdventure

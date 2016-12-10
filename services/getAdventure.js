import React from 'react'
import request from 'superagent'


const getAdventure = () => {

  const url = 'https://beercompass-server.herokuapp.com/api/v1/1/1'
  request
  .get(url)
  .set('Accept', 'text/json')
  .end((err, res) => {
    const places = res.body
    console.log(JSON.stringify(places))
  })

  return (
    <div>
      <p>This is in the getAdventure service</p>
    </div>
  )


}

export default getAdventure

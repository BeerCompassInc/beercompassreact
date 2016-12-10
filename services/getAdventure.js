
import request from 'superagent'
import React from 'react'

const getAdventure = (dispatch) =>  {

    const url = 'https://beercompass-server.herokuapp.com/api/v1/1/1'
    request
    .get(url)
    .set('Accept', 'text/json')
    .end((err, res) => {
      const locations = res.body
      console.log(locations);

    dispatch({type:'ADD_ADVENTURES', payload: locations})
  })
}


export default getAdventure

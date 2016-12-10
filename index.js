import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'
import request from 'superagent'

import reducer from './reducer'

import Login from './components'
import SignUp from './components/signUp'
import Play from './components/play'
import MyMap from './components/mymap'
import Adventure from './components/myAdventure'
import getAdventures from './services/getAdventure'

const initState = {
  title: 'Beercompass',
  route: '/',
  lastRoute: 'lemon',
  loginDetails: {},
  newUserDetails: {},
  location: {
    lat: 40,
    lng: 174
  },
  markers: [],
  places: []
}

const { getState, dispatch, subscribe } = createStore(reducer, initState)

navigator.geolocation.watchPosition((position) => {
  var pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
       console.log('I checked if you were at a new place')      
  
  request
    .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&key=AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI`)
    .end((err, res) => {
      var placeId = res.body.results[0].place_id
      pos.placeId = placeId
      var check = getState().markers.find((place) => {
        return place.placeId == placeId
      })
      if(!check){ 
        console.log('I put the place in the state', placeId)
        dispatch({type:'UPDATE_CURRENT_POS' , payload: pos})
      }
    })
})

getAdventures(dispatch)

const route = Router({ default: '/404' }, [
  ['/', (params) => Login],
  ['/signUp', (params) => SignUp],
  ['/play', (params) => Play],
  ['/mymap', (params) => MyMap],
  ['/myAdventure', (params) => Adventure]
])



subscribe(() => {
  var Component = route(getState().route)
  ReactDOM.render(<Component state={getState()} dispatch={dispatch}/> , document.querySelector('main'))
})

dispatch({type: 'lemon'})

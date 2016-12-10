import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import reducer from './reducer'

import Login from './components'
import SignUp from './components/signUp'
import Play from './components/play'
import MyMap from './components/mymap'
import Adventure from './components/myAdventure'

const initState = {
  title: 'Beercompass',
  route: '/',
  lastRoute: 'lemon',
  loginDetails: {},
  newUserDetails: {},
  location: {},
  markers: []
}

const { getState, dispatch, subscribe } = createStore(reducer, initState)

navigator.geolocation.watchPosition((position) => {
  var pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  dispatch({type:'UPDATE_CURRENT_POS' , payload: pos})
})

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

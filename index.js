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

import getAdventures from './services/getAdventure'
import watchPosition from './services/watchMyPosition'

const initState = {
  title: 'Beercompass',
  route: '/',
  lastRoute: 'lemon',
  loginDetails: {},
  currentUser: {},
  newUserDetails: {},
  location: {},
  markers: [],
  places: []
}

const store = createStore(reducer, initState)
const { getState, dispatch, subscribe } = store


watchPosition(store)
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
  ReactDOM.render(<Component state={getState()} dispatch={dispatch} />, document.querySelector('main'))
})

dispatch({type: 'lemon'})

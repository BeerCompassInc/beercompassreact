import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import reducer from './reducer'

import Login from './components'
import SignUp from './components/signUp'
import Loading from './components/loading'
import Play from './components/play'
import MyMap from './components/mymap'
import MyAdventures from './components/myadventures'

import getAdventures from './services/getAdventures'
import watchPosition from './services/watchMyPosition'

const initState = {
  title: 'Beer Compass',
  route: '/',
  loginDetails: {},
  currentUser: {},
  currentAdventure: null,
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
  ['/loading', (params) => Loading],
  ['/play', (params) => Play],
  ['/mymap', (params) => MyMap],
  ['/myAdventures', (params) => MyAdventures]
])

subscribe(() => {
  var Component = route(getState().route)
  ReactDOM.render(<Component state={getState()} dispatch={dispatch} />, document.querySelector('main'))
})

dispatch({type: 'INIT'})

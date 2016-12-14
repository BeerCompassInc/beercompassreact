import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import reducer from './reducer'

import Login from './components'
import SignUp from './components/signUp'
import Loading from './components/loading'
import Play from './components/play'
import MyMap from './components/mymap'
import MyAdventures from './components/myadventures'
import PointsOfInterest from './components/pointsOfInterest'
import AdventureMap from './components/adventureMap'

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
  myadventures: {},
  adventureToRender: null,
  pointsOfInterest: {
    interest: 'pubs',
    iconImage: 'https://cdn2.iconfinder.com/data/icons/luchesa-part-3/128/Beer-512.png'
  }
}

const store = createStore(reducer, initState)
const { getState, dispatch, subscribe } = store
watchPosition(store)

const route = Router({ default: '/404' }, [
  ['/', (params) => Login],
  ['/signUp', (params) => SignUp],
  ['/loading', (params) => Loading],
  ['/play', (params) => Play],
  ['/mymap', (params) => MyMap],
  ['/myAdventures', (params) => MyAdventures],
  ['/pointsOfInterest', (params) => PointsOfInterest],
  ['/adventureMap', (params) => AdventureMap]
])

subscribe(() => {
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, document.querySelector('main'))
})

dispatch({type: 'INIT'})

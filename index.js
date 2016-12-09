import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import reducer from './reducer'

import Login from './components'
import SignUp from './components/signUp'
import Play from './components/play'
import MyMap from './components/mymap'

const initState = {
  title: 'Beercompass',
  route: '/',
  lastRoute: 'lemon',
  loginDetails: {},
  newUserDetails: {}
}

const { getState, dispatch, subscribe } = createStore(reducer, initState)

const route = Router({ default: '/404' }, [
  ['/', (params) => Login],
  ['/signUp', (params) => SignUp],
  ['/play', (params) => Play],
  ['/mymap', (params) => MyMap]
])

subscribe(() => {
  var Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch}/> , document.querySelector('main'))
})

dispatch({type: 'lemon'})

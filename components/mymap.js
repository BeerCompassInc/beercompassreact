import React from 'react'
import Header from './header'
import getMap from '../services/map'

module.exports = ({state, dispatch}) => {
  return(
    <div>
      <Header state={state} dispatch={dispatch}/>
      <h1>MAP</h1>
    </div>
  )
}

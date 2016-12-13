import React from 'react'
import Menu from './menu'
import Maps from '../services/map'

module.exports = ({ state, dispatch }) => {
  return (
    <div className='mapDiv'>
      <Menu state={state} dispatch={dispatch} />
      <Maps state={state} dispatch={dispatch} />
    </div>
  )
}

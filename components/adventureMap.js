import React from 'react'
import Menu from './menu'
import Maps from '../services/map'

module.exports = ({ state, dispatch }) => {
  return (
    <div className='mapDiv' style={{width: '100vw', height: '89vh'}}>
      <Menu state={state} dispatch={dispatch} />
      <Maps state={state} dispatch={dispatch} />
    </div>
  )
}

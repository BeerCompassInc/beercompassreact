import React from 'react'
import Header from './header'
import Maps from '../services/map'

module.exports = ({state, dispatch}) => {
  return(
    <div style={{width:'100vw', height:'89vh'}}>
      <Header state={state} dispatch={dispatch}/>
      <Maps state={state} />
    </div>
  )
}

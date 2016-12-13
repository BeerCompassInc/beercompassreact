import React from 'react'
import Menu from './menu'
import { newAdventure } from '../services/saveAdventure'
import Logo from './logo'

module.exports = ({ state, dispatch }) => {
  const goToMap = () => {
    dispatch({type: 'CHANGE_ROUTE', payload: '/mymap'})
    newAdventure(state, dispatch)
  }
  return (
    <div className='playDiv'>
      <Menu state={state} dispatch={dispatch} />
      <Logo />
      <div className='containerWithLogo'>
        <h3>Start your adventure</h3>
        <div className='playContainer'>
          <svg className='play' onClick={goToMap} viewBox='0 0 40 40' >
            <circle className='circle' cx='20' cy='20' r='20' />
            <g>
              <polygon className='poly' points='30,20 15,30 15,19 15,9.7  ' />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

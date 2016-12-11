import React from 'react'
import Header from './header'
import { newAdventure } from '../services/saveAdventure'

module.exports = ({state, dispatch}) => {
  console.log(state.currentUser);
  const goToMap = () => {
    dispatch({type: 'CHANGE_ROUTE', payload: '/mymap'})
    newAdventure(state, dispatch)
  }
  return (
    <div className='playDiv'>
      <Header state={state} dispatch={dispatch} />
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
  )
}

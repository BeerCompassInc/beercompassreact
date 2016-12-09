import React from 'react'
import Header from './header'

module.exports = ({state, dispatch}) => {
  const goToMap = () => {
    dispatch({type: 'CHANGE_ROUTE', payload: '/mymap'})
  }
  return(
    <div>
      <Header state={state} dispatch={dispatch}/>
      <div className='playContainer'>
      <svg className="play" onClick={goToMap} viewBox="0 0 40 40" >
        <circle className='circle' cx="20" cy="20" r="20"/>
        <g>
        	<polygon className='poly' points="30,20 15,30 15,19 15,9.7  "/>
        </g>
      </svg>
      </div>
    </div>
  )
}

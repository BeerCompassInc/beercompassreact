import React from 'react'
import Header from './header'
import loginService from '../services/login'

module.exports = ({state, dispatch}) => {

  return (
    <div className='login'>
      <Header state={state} dispatch={dispatch} />
      <img src='https://cloud.githubusercontent.com/assets/13898345/21078169/1f528acc-bfcb-11e6-8977-de6fa5b1c198.gif'/>
    </div>
  )
}
